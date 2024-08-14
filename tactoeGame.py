import tkinter as tk
from tkinter import messagebox

class TicTacToeApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Tic-Tac-Toe")
        self.current_marker = 'X'
        self.board = [''] * 9  # Empty board
        self.buttons = [None] * 9
        self.create_widgets()
        self.style_widgets()

    def create_widgets(self):
        for i in range(9):
            self.buttons[i] = tk.Button(self.root, text=' ', width=8, height=4,
                                    font=('Arial', 24, 'bold'),
                                    command=lambda i=i: self.make_move(i))
            row = i // 3
            col = i % 3
            self.buttons[i].grid(row=row, column=col, padx=5, pady=5, sticky='nsew')

        self.reset_button = tk.Button(self.root, text="Reset Game", command=self.reset_board,
                                    font=('Arial', 14, 'bold'), bg='#ff6f61', fg='white',
                                    relief='flat')
        self.reset_button.grid(row=3, column=0, columnspan=3, pady=10)

        for i in range(3):
            self.root.grid_columnconfigure(i, weight=1)
            self.root.grid_rowconfigure(i, weight=1)

    def style_widgets(self):
        self.root.configure(bg='#1e1e1e')
        self.reset_button.configure(bg='#ff6f61', activebackground='#ff6f61')

        for button in self.buttons:
            button.configure(bg='#333333', fg='white', borderwidth=0,
                            highlightbackground='#666666', highlightcolor='#666666',
                            activebackground='#555555', activeforeground='white')

    def make_move(self, index):
        if self.board[index] == '' and not self.check_for_win() and not self.is_draw():
            self.board[index] = self.current_marker
            self.buttons[index].config(text=self.current_marker, bg='#333333' if self.current_marker == 'X' else '#444444')
            if self.check_for_win():
                messagebox.showinfo("Game Over", f"Player {self.current_marker} wins!")
                self.reset_board()
            elif self.is_draw():
                messagebox.showinfo("Game Over", "It's a draw!")
                self.reset_board()
            else:
                self.current_marker = 'O' if self.current_marker == 'X' else 'X'

    def reset_board(self):
        self.board = [''] * 9
        for button in self.buttons:
            button.config(text=' ', bg='#333333')
        self.current_marker = 'X'

    def check_for_win(self):
        win_conditions = [
            [0, 1, 2],  # Top row
            [3, 4, 5],  # Middle row
            [6, 7, 8],  # Bottom row
            [0, 3, 6],  # Left column
            [1, 4, 7],  # Middle column
            [2, 5, 8],  # Right column
            [0, 4, 8],  # Diagonal top-left to bottom-right
            [2, 4, 6]   # Diagonal top-right to bottom-left
        ]
        for condition in win_conditions:
            a, b, c = condition
            if self.board[a] == self.board[b] == self.board[c] != '':
                return True
        return False

    def is_draw(self):
        return all(cell != '' for cell in self.board) and not self.check_for_win()

if __name__ == "__main__":
    root = tk.Tk()
    app = TicTacToeApp(root)
    root.mainloop()

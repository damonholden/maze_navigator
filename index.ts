const assert = require("node:assert/strict")

class Maze {
    maze: object

    constructor(height: number, width: number, wall_sequence: boolean[]) {
        const total_squares = height * width

        assert(wall_sequence.length === total_squares, "The wall sequence length must equal the size calculated by height and width.")

        const maze = []
        let wall_sequence_position = 0

        for (let row = 0; row < height; row++) {
            const maze_row = []

            for (let column = 0; column < width; column++) {
                if (wall_sequence[wall_sequence_position] === true) {
                    maze_row.push({ type: 'floor' })
                    wall_sequence_position++
                    continue
                }

                if (wall_sequence[wall_sequence_position] === false) {
                    maze_row.push({ type: "wall" })
                    wall_sequence_position++
                    continue
                }

                throw new Error("Invalid value in wall sequence.")
            }

            maze.push(maze_row)
        }

        this.maze = maze
    }
}

module.exports = {
    Maze
}
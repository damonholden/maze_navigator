const { Maze } = require("./index.ts")
const { describe, test } = require("node:test")
const assert = require("node:assert/strict")

describe("Maze", function () {
    test("3x3 maze of all walls should generate correctly", function () {
        const maze_of_all_walls = new Maze(3, 3, [false, false, false, false, false, false, false, false, false])

        assert(are_mazes_equal(maze_of_all_walls.maze, [
            [{ type: "wall" }, { type: "wall" }, { type: "wall" }],
            [{ type: "wall" }, { type: "wall" }, { type: "wall" }],
            [{ type: "wall" }, { type: "wall" }, { type: "wall" }]
        ]))
    })
    test("3x3 maze of all floors should generate correctly", function () {
        const maze_of_all_floors = new Maze(3, 3, [true, true, true, true, true, true, true, true, true])

        assert(are_mazes_equal(maze_of_all_floors.maze, [
            [{ type: "floor" }, { type: "floor" }, { type: "floor" }],
            [{ type: "floor" }, { type: "floor" }, { type: "floor" }],
            [{ type: "floor" }, { type: "floor" }, { type: "floor" }]
        ]))
    })
    test("3x3 maze of floors layed out in a C shape should generate correctly", function () {
        const maze_of_floors_in_a_C_shape = new Maze(3, 3, [true, true, true, true, false, false, true, true, true])

        assert(are_mazes_equal(maze_of_floors_in_a_C_shape.maze, [
            [{ type: "floor" }, { type: "floor" }, { type: "floor" }],
            [{ type: "floor" }, { type: "wall" }, { type: "wall" }],
            [{ type: "floor" }, { type: "floor" }, { type: "floor" }]
        ]))
    })
})

function are_mazes_equal(maze_A, maze_B) {
    if (maze_A.length !== maze_B.length) {

        return false
    }

    for (let row_index = 0; row_index < maze_A.length; row_index++) {
        if (maze_A[row_index].length !== maze_B[row_index].length) {

            return false
        }

        for (let column_index = 0; column_index < maze_A[row_index].length; column_index++) {
            if (maze_A[row_index][column_index].type !== maze_B[row_index][column_index].type) {

                return false
            }
        }
    }

    return true
}

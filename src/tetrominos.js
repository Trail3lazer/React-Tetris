export const TETROMINOS = {
    0: { shape: [[0]], color: '0,0,0' },
    I: {
        shape: [
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0]
        ],
        color: '0, 255, 255'
    },
    J: {
        shape: [
            [ 0 , 'J',  0 ],
            [ 0 , 'J',  0 ],
            ['J', 'J',  0 ],
        ],
        color: '50, 0, 255'
    },
    L: {
        shape: [
            ['L',  0 ,  0 ],
            ['L',  0 ,  0 ],
            ['L', 'L',  0 ],
        ],
        color: '255, 0, 255'
    },
    O: {
        shape: [
            ['O', 'O'],
            ['O', 'O'],
            
        ],
        color: '255, 200, 0'
    },
    S: {
        shape: [
            ['S',  0 ,  0 ],
            ['S', 'S',  0 ],
            [ 0 , 'S',  0 ],
        ],
        color: '100, 255, 0'
    },
    Z: {
        shape: [
            [ 0 , 'Z', 0 ],
            ['Z', 'Z', 0 ],
            ['Z',  0 , 0 ],
        ],
        color: '255, 0, 50'
    },
    T: {
        shape: [
            [ 0 , 'T',  0 ],
            ['T', 'T',  0 ],
            [ 0 , 'T',  0 ],
        ],
        color: '200, 0, 225'
    },
}

export const randomTetromino = () => {
    const tetrominos = 'IJLOSTZ';
    const randTetrominos =
        tetrominos[Math.floor(Math.random() * tetrominos.length)];
    return TETROMINOS[randTetrominos];
};
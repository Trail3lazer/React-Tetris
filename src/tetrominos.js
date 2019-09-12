export const TETROMINOS = {
    0: { shape: [[0]], color: '0,0,0' },
    I: {
        shape: [
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0]
        ],
        color: '0, 210, 245'
    },
    J: {
        shape: [
            [ 0 , 'J',  0 ],
            [ 0 , 'J',  0 ],
            ['J', 'J',  0 ],
        ],
        color: '44, 0, 243'
    },
    L: {
        shape: [
            ['L',  0 ,  0 ],
            ['L',  0 ,  0 ],
            ['L', 'L',  0 ],
        ],
        color: '217, 90, 16'
    },
    O: {
        shape: [
            ['O', 'O'],
            ['O', 'O'],
            
        ],
        color: '234, 188, 25'
    },
    S: {
        shape: [
            ['S',  0 ,  0 ],
            ['S', 'S',  0 ],
            [ 0 , 'S',  0 ],
        ],
        color: '98, 220, 17'
    },
    Z: {
        shape: [
            [ 0 , 'Z', 0 ],
            ['Z', 'Z', 0 ],
            ['Z',  0 , 0 ],
        ],
        color: '253, 23, 67'
    },
    T: {
        shape: [
            [ 0 , 'T',  0 ],
            ['T', 'T',  0 ],
            [ 0 , 'T',  0 ],
        ],
        color: '153, 0, 223'
    },
}

export const randomTetromino = () => {
    const tetrominos = 'IJLOSTZ';
    const randTetrominos =
        tetrominos[Math.floor(Math.random() * tetrominos.length)];
    return TETROMINOS[randTetrominos];
};
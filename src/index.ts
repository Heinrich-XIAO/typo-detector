export default function hasGenuineTypos(string1: string, string2: string): boolean {
  if (string1.length !== string2.length) {
    return false;
  }

  const keyboardLayout: string[] = [
    '1234567890',
    'qwertyuiop',
    'asdfghjkl',
    'zxcvbnm'
  ];

  interface KeyCoords {
    col: number;
    row: number;
  }

  function getKeyCoords(key: string): KeyCoords | null {
    for (let row = 0; row < keyboardLayout.length; row++) {
      const col = keyboardLayout[row].indexOf(key);
      if (col !== -1) {
        return { col, row };
      }
    }
    return null;
  }

  function isClose(coord1: KeyCoords, coord2: KeyCoords): boolean {
    // Check if the keys are adjacent on the keyboard
    const rowDiff = Math.abs(coord1.row - coord2.row);
    const colDiff = Math.abs(coord1.col - coord2.col);
    return colDiff <= 1 && rowDiff === 0;
  }

  let amountClose = 0;
  for (let i = 0; i < string1.length; i++) {
    const [coord1, coord2] = [getKeyCoords(string1[i]), getKeyCoords(string2[i])];
    console.log(coord1, coord2);
    if (!coord1 || !coord2 || !isClose(coord1, coord2)) {
      return false;
    } else if (coord1.row - coord2.row !== 0 || coord1.col - coord2.col !== 0) {
      amountClose++;
    }
  }

  console.log(amountClose);
  // No adjacent key typos found
  return amountClose !== 0;
}

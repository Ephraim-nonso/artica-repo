export const addressShortner = (addr) => {
  const first = addr?.slice(0, 6);
  const second = addr?.slice(37, 40);
  return console.log(first + "....." + second);
};

//0x00cB231aB0d44BB6eEBCb8d7b4a69B3aeBFFdCd5

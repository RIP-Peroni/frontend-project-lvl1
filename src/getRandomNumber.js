export default (min, max) => {
  const minN = Math.ceil(min);
  const maxN = Math.floor(max);
  return Math.floor(Math.random() * (maxN - minN + 1)) + minN; // Максимум и минимум включаются
};

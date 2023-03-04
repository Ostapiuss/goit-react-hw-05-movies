export const getIdFromUrl = (url: string): string | null => {
  const splitUrl = url.split('/');
  let id:string | null = null;

  splitUrl.forEach(el => {
    if(parseInt(el)) {
      id = el;
    }
  })

  return id;
}

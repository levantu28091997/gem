export default function getSlug(param: any) {
    const arr = param.split('/');
    return arr[2];
  }
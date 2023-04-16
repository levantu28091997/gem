
export default function propsDescription(data:any){
    const gameName = data && data?.attributes?.name;
    const description = data && data?.attributes?.description;
    return {
        gameName,description
    }
}
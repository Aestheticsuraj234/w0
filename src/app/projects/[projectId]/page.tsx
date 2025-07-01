
interface Props{
    params:Promise<{
        projectId:string
    }>
}
const Page = async({params}:Props)=>{
    const {projectId} = await params
    return (
        <div>
            <h1>Project id: {projectId}</h1>
        </div>
    )
}
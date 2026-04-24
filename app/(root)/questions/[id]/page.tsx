const page = async({params}:{pramas:{id:string}}) => {
  const {id}=await params;
  return (
    <div>{id}</div>
  )
}

export default page

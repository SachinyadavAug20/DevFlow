const page = ({params}:{pramas:{id:string}}) => {
  const {id}=params;
  return (
    <div>{id}</div>
  )
}

export default page

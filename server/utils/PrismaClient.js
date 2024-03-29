let prismaInstance = null;
function getPrismaInstance(){
    if(!prismaInstance){
        prismaInstance=new PrismaClient()
    }
    return prismaInstance;
}
export default prismaInstance
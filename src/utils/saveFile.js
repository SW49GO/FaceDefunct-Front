import { setFiles } from "../services/api"
export async function saveFile(data){
    const {id, idDef, dest, token, file} = data
    console.log('data:', data)
    try{
    // const pathName = await setFiles(id, defId, dest, token, file)
    //         // console.log('pathName:', pathName)
    //         if(pathName){
    //             console.log('pathName:', pathName)
    //             // setImage(pathName)
    //             // dispatch(updateUserInfos(pathName))
    //             // // To indicate the image has been change
    //             // setCacheBuster(prev => prev + 1)
    //             // updatePhoto(id, 0, pathName, token, 'updatePhotoProfil')
    //         }
    }catch(error){
        return error
    }

}
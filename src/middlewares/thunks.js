import { createAsyncThunk } from "@reduxjs/toolkit"
import  {setUserInfos, setAdminInfos, setAuth, setDefunctsList, setListFriends, setNumberFriends, updateUserInfos} from "../features/store"
import * as api  from "../services/api"


export const getInfosUser = createAsyncThunk('userSlice/getInfos', async (data, thunkAPI)=>{
  console.log('data:', data)
  console.log('THUNK-GETINFOS')
  const state = thunkAPI.getState()
  const {id, token, idDef, ctrl, other} = data
  console.log('ctrl:', ctrl)
  if(id===null){
    return
  }else{
    try{
      const responseUserData = await api.getInfos(id, token, idDef, 'getUserData', other)
      console.log('responseUserDataTHUNK:', responseUserData)
      if(responseUserData){
        thunkAPI.dispatch(setUserInfos(responseUserData.userData[0]))
        const adminInfos = responseUserData.userData.filter((item, index) => index !== 0)
        thunkAPI.dispatch(setAdminInfos(adminInfos))
      }
      // Update the connexion informations
      if (!state.authSlice.auth){
          api.updater(id,token,null, 'updateLastLogin')
          api.updater(id, token,null,'updateNewLogin')
          api.updater(id,token,1,'updateOnline')
      }
      return responseUserData.userData
    }catch(error){
      return error
    }
  }
})
export const initializeHeader = createAsyncThunk('userSlice/globalHeader', async (data, thunkAPI)=>{
  const {id, token} = data
  try{
    const responseDefunctList = await api.getInfos(id, token, 0, 'getUserDefunctList')
      if(responseDefunctList.result.length>0){
        thunkAPI.dispatch(setDefunctsList(responseDefunctList.result))
      }
    const responseAskFriend = await api.getInfos(id, token, 0, 'getAskFriend')
      if(responseAskFriend.friends.length>0){
        thunkAPI.dispatch(setNumberFriends(responseAskFriend.friends.length))
      }
    const responseFriendList = await api.getInfos(id, token, 0, 'getFriendsList')
      if(responseFriendList.result.length>0){
        thunkAPI.dispatch(setListFriends(data.result))
      }
  }catch(error){
    return error
  }

})

export const saveFile = createAsyncThunk('userSlice/saveFile', async (data, thunkAPI)=>{
  console.log('dataFILE:', data)
  const {id, defId, dest, token, file} = data
  console.log('fileTHUNK:', file[0])
  try{
     const pathName = await api.setFiles(id, defId, dest, token, file[0])
   console.log('pathName:', pathName)
    if(pathName){
       console.log('pathName:', pathName)
      thunkAPI.dispatch(updateUserInfos(pathName))
   // updatePhoto(id, 0, pathName, token, 'updatePhotoProfil')
    }
  }catch(error){
    return error
  }
})

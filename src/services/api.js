export async function signIn(data){
    try{
      const response = await fetch(`http://localhost:3000/api/user/signIn/setRegister`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data),
      })
        if(response.ok){
          const data = await response.json()
          console.log('dataFetch:', data)
          return data
        }else if(response.status===400){
          throw new Error('400')
        }
    }catch(error){
       return Promise.reject(error)
    }
  }
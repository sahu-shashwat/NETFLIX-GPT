export const checkvlaidData= (email,password,username,phonenum)=>{
    const isEmailid =/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const ispassword= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);   
    const isusername=/^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(username)
    const isphonenum=/^\+?[1-9][0-9]{7,14}$/.test(phonenum)

    if(!isusername) return('Invalid Username')
    if (!isEmailid) return('Invalid Email id')
    if (!ispassword) return('Invalid Password')
    if(!isphonenum)  return('Invalid Phonenumber')
        
    return null
}
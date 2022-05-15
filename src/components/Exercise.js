import React from "react";

const users = [
    {id:1, name:'ueda'},
    {id:2, name:'sdsaf'},
    {id:3, name:'dfsdfs'}
]

 class Users extends React.Component {
   
    render() {

        const listofusers = users.map(({id, name}) =>{
            return  <li key={id} >{name}</li>
        } )

        return (
            <div><ul>{listofusers}</ul></div>
        )
    }
}

export default Users;
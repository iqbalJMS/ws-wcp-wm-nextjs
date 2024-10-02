# do not modify this folder

this folder contains build deps of internal library.
it is not meant to be modified by the user.

## Usage :: CLIENT

```typescript
"use client"
import { ACT_LoginAction } from "../action/action.login.ts"
import { Arrival, Departure, Call } from "@strix/client"


export function CFN_LoginExample(
    data: ExampleInterface,
    transit: Call
){
    transit(async()=>{
        const dataEncrypted = Departure(data)
        const actionResult = await ACT_LoginAction(dataEncrypted)
        const result = Arrival<boolean>(actionResult)
        if(result){
            console.log("login success")
        }else{
            console.log("login failed")
        }
    })
}
```


## Usage :: SERVER (action)

```typescript
"use server"
import { ACT_LoginAction } from "../action/action.login.ts"
import { Crypt } from "@strix/server"


export async function ACT_LoginAction(data){
    const dataDecrypted = await Crypt.Arrival(data)
    // do something with dataDecrypted
    // call api or something
    const exampleResult = true
    const result = Crypt.Departure(exampleResult)
    return result
}
```


## on the client component call

```typescript
import { useTransition, useState } from "react"
import { CFN_LoginExample } from "../function/cfn.login.example.ts"

export function CE_LoginExample(){
    const [pending, transition] = useTransition()
    const [data, setData] = useState()

    const doLogin = () => !pending && CFN_LoginExample(data, transition)

    return (
        <div>
            element??
        </div>
    )
}
```
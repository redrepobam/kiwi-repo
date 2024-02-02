import React , {useEffect , useState} from 'react';

export default function useBookSearch({q , page_number}){

    useEffect(()=>{
        let cancel ; 

        axios({
            method:"GET" , 
            url:"https://somelink" , 
            params: { q   , page : page_number} , 
            cancelToken : new axios.CancelToken(c=> cancel = c )
        }).then(res=>{
            console.log(res.data)
            console.log(`${crypto.randomUUID()}`)

        }).catch(e=>{
            if(axios.isCancel(e)) return ;
        })


        return ()=>{ cancel();}


    } , [q , page_number])


    return null;

}
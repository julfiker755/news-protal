```js
async function getdata(){
    let social=(await (await fetch(`${process.env.HOST}/api/social`,{ cache: 'no-cache' })).json())['data']
    let categories=(await (await fetch(`${process.env.HOST}/api/categories`,{ cache: 'no-cache' })).json())['data']
    return {social,categories}
}

const PlanLayout = async(props) => {
    const data=await getdata()
    return (
        <>
           ........
        </>
    );
};
```
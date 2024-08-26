# tempimail
JavaScript library for tempimail.org
# main
```js
async function main(){
    const {tempimail} = require('./tempimail');
    const email= new tempimail();
    let req=await email.get_email()
    console.log(req)
}
main()
```

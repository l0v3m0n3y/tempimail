class tempimail{
    constructor(){
        this.api = "https://tempimail.org/api"
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","host":"tempimail.org"}
        this.token=null
        this.api_key="F42LPANYtcef0pZfpJeA6zlQaOrqW32ZM6do1UQ5"
    }
    async get_email(){
        let req=await fetch(`${this.api}/email/create/${this.api_key}`,{method:"POST",headers: this.headers});
        let json=await req.json()
        this.token=await json["data"]["email_token"]
        return await json;
    }
    async get_messages(){
        let req=await fetch(`${this.api}/messages/${this.token}/${this.api_key}`,{method:"GET",headers: this.headers});
        return await req.json()
    }
}
module.exports = {tempimail};
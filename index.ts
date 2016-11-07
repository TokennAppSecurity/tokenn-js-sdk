import * as superagent from 'superagent';

export class Tokenn {
  static tokennAppId:string;
  static tokennApiKey:string;
    
  constructor() {

  }

  static initialize(tokennAppId: string, tokennApiKey:string):void{
    Tokenn.tokennAppId = tokennAppId;
    Tokenn.tokennApiKey = tokennApiKey;
  }

  static validateApiKey(clientAppId:string, clientApiKey:string): Promise<any>{
    return new Promise((resolve, reject)=>{
      superagent
      //https://tokenn.herokuapp.com/api/tokennapps/JAGlFKoNTP/clientapps/wvpIDDDrKr/validity/apiKey/a56af5e3833b40b11e6ebe41706a8fe4
      .get(`https://tokenn.herokuapp.com/api/tokennapps/${Tokenn.tokennAppId}/clientapps/${clientAppId}/validity/apiKey/${clientApiKey}`)
      .set('x-tokenn-apikey', Tokenn.tokennApiKey)
      .set('Accept', 'application/json')
      .end((err, res)=>{
        if(err) console.error(err);
        if(res.error) console.error(err);
        resolve(res.body);
      });
    })
  }

}
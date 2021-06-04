
const app = {
    init(){
      console.log('hello world!')
    },
    messenger(){

      window.Tawk_API = Tawk_API || {},
      Tawk_LoadStart=new Date();

      var s1=document.createElement("script");

      s1.async=true;
      s1.src='https://embed.tawk.to/60b9df3c6699c7280daaa98f/1f7b1024k';
      s1.charset='UTF-8';
      s1.setAttribute('crossorigin','*');
      document.body.append(s1)

    }
}

app.init();

/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode:true,
  async redirects(){
    return [
      {
        source:"/contact",  // parameter도 제공 가능.   
        destination:"/form",  // 외부 사이트도 상관없다. 
        permanent:false,  // 브라우저나 검색엔진이 기억하는 지 여부 
      }
    ]
  },
  async rewrites(){  // 주소창이 바뀌지는 않음. (따라서 get으로 요청하는 거 가려줄 수 있음.) -> request를 marking 할 수 있음. 
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      }
    ]
  }
}

module.exports = nextConfig;

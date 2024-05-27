const arr = new Array(10).fill('test')
export default function Home() {
  return (
    <>
      <p>로그인 안했을 때: 가이드</p>
      <p>로그인 했을 때: 대쉬보드</p>
      <p>{arr.length}</p>
      {arr.map((el, index) => (
        <p key={index}>
          {el}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
          perspiciatis aliquid ut odio, ipsum quas similique fuga cupiditate
          delectus molestias, atque accusamus minus expedita, modi a recusandae
          provident voluptate. Voluptate!
        </p>
      ))}
    </>
  )
}

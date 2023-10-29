// import Signup from "./signup/page";

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-start p-24">
//      <Signup/>
//     </main>
//   );
// }


import {redirect} from 'next/navigation'
export default function Page() {
  redirect('/home');
}

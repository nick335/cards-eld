import CardImage from "@/components/CardImage";
import CardInfo from "@/components/CardInfo";


export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 `} >
     <div className= 'group w-[204px] h-[600px] [perspective: 1000px]'>
       <div className="relative h-full w-full rounded-2xl transition-all [transform-style: preserve-3d] group-hover:[tranform:rotateY(180deg)] border-b-4 border-black border-x border-t">
        {/* <CardImage /> */}
        <CardInfo />
       </div>
     </div>
    </main>
  )
}

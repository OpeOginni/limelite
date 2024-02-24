import MainHeader from "@/components/mainHeader";
import Image from "next/image";
import { Kanit, Permanent_Marker } from "next/font/google";
import { cn } from "@/lib/utils";
import { MoveUpRightIcon } from "lucide-react";
import Link from "next/link";
import MasterpieceCarousel from "@/components/masterpieceCarousel";

const kanit = Kanit({
  weight: "600",
  subsets: ["latin"],
});

const permanent_marker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center lg:pt-24 pt-10">
      {/* Welcome Heading DIV */}
      <section
        className={cn(
          "flex items-center justify-center w-[100%] py-4",
          kanit.className
        )}
      >
        <div className="flex flex-col lg:max-w-[700px] max-w-[500px]">
          <div className={kanit.className}>
            <p className="text-center lg:text-7xl md:text-5xl text-3xl">
              We Put You In the
            </p>
            <p className="text-center lg:text-7xl md:text-5xl text-3xl text-amber-600">
              Spot<span className="text-amber-600">Lite</span>
            </p>
          </div>
          <div className="md:text-sm text-xs text-center py-6 px-3">
            <p>
              At LimeLite out passion for photography and Our Commitment to
              creating timeless memories for out clients keeps us going.
            </p>
          </div>
        </div>
      </section>

      {/* Engagement and Push to Portfolio */}
      <section className="w-[100%] p-4 h-[16rem]">
        <div className="grid lg:grid-cols-6 md:grid-cols-5 grid-cols-3 gap-3 h-28">
          <div className="border rounded-lg md:col-span-2 col-span-1 h-28">
            01
          </div>
          <div className="border rounded-lg lg:col-span-2 md:block md:col-span-1 hidden h-28">
            02
          </div>
          <div className="flex flex-col justify-center items-center border rounded-lg lg:col-span-2 col-span-2 h-28">
            <Link
              href={"/portfolio"}
              className="flex flex-row text-center lg:gap-2 p-2 lg:text-2xl text-s underline"
            >
              <div>
                <span className={cn(permanent_marker.className)}>SEE MORE</span>
              </div>
              <span
                className={
                  (cn(permanent_marker.className),
                  "flex text-amber-600 justify-center items-center")
                }
              >
                <MoveUpRightIcon />
              </span>
            </Link>
            <div className="text-xs">
              <p>1000+ Pictures Delivered</p>
              <p>200+ Happy Clients</p>
            </div>
          </div>
          <div className="border rounded-lg col-span-3  h-28">04</div>
          <div className="border rounded-lg lg:col-span-2 md:block md:col-span-1 hidden h-28">
            05
          </div>
          <div className="border rounded-lg md:block md:col-span-1 hidden h-28">
            06
          </div>
        </div>
      </section>

      {/*Our Best MasterPiece */}

      <section className="flex flex-col justify-center w-[100%] px-4 py-[5rem]">
        <div className="flex items-center justify-center w-[100%] py-4 ">
          <div
            className={cn("lg:max-w-[500px] md:max-w-[300px] max-w-[200px]")}
          >
            <p className="text-center lg:text-5xl md:text-3xl text-xl">
              OUR BEST MASTERPIECE.
            </p>
          </div>
        </div>
        <div className="flex justify-center w-[100%] p-8">
          <MasterpieceCarousel />
        </div>
      </section>

      {/*TODO: Services Section*/}
      <section id="service"></section>
    </main>
  );
}

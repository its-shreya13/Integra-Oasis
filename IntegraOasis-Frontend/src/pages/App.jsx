import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Header from "../sharedcomp/Header";
import Nav from "../sharedcomp/Nav";
import Footer from "../sharedcomp/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div id="featured" className="bg-cyan-100 text-[50px] font-['Rage'] text-[#052747] text-center">
        Featured
      </div>
      <Carousel className="w-full max-w-xl mx-auto mb-5 mt-4">
        <CarouselContent>
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex items-center justify-center p-6">
                    <Link to={`/site${index + 1}`}>
                      <img
                        src={`images/image${index + 1}.jpg`}
                        className="w-full h-full"
                        alt={`image${index + 1}`}
                      />
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="bg-cyan-100 text-[50px] font-['Rage'] text-[#052747] text-center mb-4">
        Categories
      </div>
      <div className="grid grid-cols-3 gap-2">
        <Card className="flex w-[200px] h-[200px] items-center justify-center ml-[258px]">
          <CardContent>
            <img
              src="images/decor.jpg"
              className="flex items-center justify-center h-[100px] w-[140px] mb-3 mt-6 rounded"
            />
            <p className="flex items-center justify-center font-['Rage'] text-[30px]">
              Home Decor
            </p>
          </CardContent>
        </Card>
        <Card className="flex w-[200px] h-[200px] items-center justify-center ml-[132px]">
          <CardContent>
            <Link to="/clothing">
              <img
                src="images/cloth.jpg"
                className="flex items-center justify-center h-[100px] w-[140px] mb-3 mt-6 rounded"
              />
              <p className="flex items-center justify-center font-['Rage'] text-[30px]">
                Clothing
              </p>
            </Link>
          </CardContent>
        </Card>
        <Card className="flex w-[200px] h-[200px] items-center justify-center">
          <CardContent>
            <img
              src="images/beauty.jpg"
              className="flex items-center justify-center h-[100px] w-[140px] mb-3 mt-6 rounded"
            />
            <p className="flex items-center justify-center font-['Rage'] text-[30px]">
              Beauty care
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <Card className="flex w-[200px] h-[200px] items-center justify-center ml-[258px] mt-4">
          <CardContent>
            <img
              src="images/jwel.jpg"
              className="flex items-center justify-center h-[100px] w-[140px] mb-3 mt-6 rounded"
            />
            <p className="flex items-center justify-center font-['Rage'] text-[30px]">
              Jwellery
            </p>
          </CardContent>
        </Card>
        <Card className="flex w-[200px] h-[200px] items-center justify-center ml-[132px] mt-4">
          <CardContent>
            <img
              src="images/gift.jpg"
              className="flex items-center justify-center h-[100px] w-[140px] mb-3 mt-6 rounded"
            />
            <p className="flex items-center justify-center font-['Rage'] text-[30px]">
              Gifting
            </p>
          </CardContent>
        </Card>
        <Card className="flex w-[200px] h-[200px] items-center justify-center mt-4">
          <CardContent>
            <img
              src="images/stationary.jpg"
              className="flex items-center justify-center h-[100px] w-[140px] mb-3 mt-6 rounded"
            />
            <p className="flex items-center justify-center font-['Rage'] text-[30px]">
              Stationary
            </p>
          </CardContent>
        </Card>
      </div>
      <Nav />

      <Footer />
    </div>
  );
}

export default App;

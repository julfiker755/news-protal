import PlanLayout from '@/components/master/Plan-layout';
import Hero from '@/components/news/Hero';
import NewsList from '@/components/news/NewsList';
import PopularList from '@/components/news/PopularList';



async function getdata(){
  let slider=(await (await fetch(`${process.env.HOST}/api/news/type?type=Slider`,{ cache: 'no-cache' })).json())['data']
  let seatured=(await (await fetch(`${process.env.HOST}/api/news/type?type=Featured`,{ cache: 'no-cache' })).json())['data']
  let Popular= (await (await fetch(`${process.env.HOST}/api/news/type?type=Popular`)).json())['data']
  let Latest= (await (await fetch(`${process.env.HOST}/api/news/latest`)).json())['data']
  return {slider,seatured,Popular,Latest}
}

const Rootpage = async() => {
  const data=await getdata()
  
  return (
    <PlanLayout>
       <Hero slider={data["slider"]} seatured={data["seatured"]}></Hero>
       <div className="container mt-4">
                <h5>LATEST</h5>
                <hr/>
                <div className="row">
                    <div className="col-md-9 col-lg-9 col-sm-12 col-12 px-3">
                        <NewsList Latest={data["Latest"]}></NewsList>
                    </div>
                    <div className="col-md-3 col-lg-3 col-sm-12 col-12 px-3">
                       <PopularList popular={data["Popular"]}></PopularList>
                    </div>
                </div>
            </div>
    </PlanLayout>
  );
};

export default Rootpage;
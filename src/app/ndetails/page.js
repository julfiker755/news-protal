import Comment from '@/components/master/Comment';
import PlanLayout from '@/components/master/Plan-layout';
import NewsDetails1 from '@/components/news/NewsDetails1';
import PopularList from '@/components/news/PopularList';





async function getdata(id){
    let details= (await (await fetch(`${process.env.HOST}/api/news/details?id=${id}`)).json())['data']
    let Popular= (await (await fetch(`${process.env.HOST}/api/news/type?type=Popular`)).json())['data']
    let comments= (await (await fetch(`${process.env.HOST}/api/comments/news?Postid=${id}`,{ cache: 'no-store' })).json())['data']
    return {details,Popular,comments}
  }

const NewsDetails = async({searchParams}) => {
    const data=await getdata(searchParams?.id)
    return (
       <PlanLayout>
         <div className="container mt-4">
                <hr/>
                <div className="row">
                    <div className="col-md-9 col-lg-9 col-sm-12 col-12 px-3">
                      <div className='card'>
                      <NewsDetails1 details={data["details"]}></NewsDetails1>
                      <Comment postID={searchParams?.id} data={data['comments']}></Comment>
                      </div>
                    </div>
                    <div className="col-md-3 col-lg-3 col-sm-12 col-12 px-3">
                       <PopularList popular={data["Popular"]}></PopularList>
                      
                    </div>
                </div>
            </div>
       </PlanLayout>
    );
};

export default NewsDetails;
import PlanLayout from '@/components/master/Plan-layout';
import NewsList from '@/components/news/NewsList';
import PopularList from '@/components/news/PopularList';
import React from 'react';

async function getdata(keyword){
    let news= (await (await fetch(`${process.env.HOST}/api/news/search?keyword=${keyword}`)).json())['data']
    let Popular= (await (await fetch(`${process.env.HOST}/api/news/type?type=Popular`)).json())['data']
    return {news,Popular}
  }

const searchpage = async({searchParams}) => {
    const data=await getdata(searchParams?.keyword)
    return (
        <PlanLayout>
            <div className="container mt-4">
                <h5>LATEST</h5>
                <hr/>
                <div className="row">
                    <div className="col-md-9 col-lg-9 col-sm-12 col-12 px-3">
                        <NewsList Latest={data["news"]}></NewsList>
                    </div>
                    <div className="col-md-3 col-lg-3 col-sm-12 col-12 px-3">
                       <PopularList popular={data["Popular"]}></PopularList>
                    </div>
                </div>
            </div>
        </PlanLayout>
    );
};

export default searchpage;
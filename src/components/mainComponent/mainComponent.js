




import DashHeader from '../header/header';
import MainDash from '../mainDash/mainDash';
import Overview from '../overview/overview';
import { ReactComponent as Facebook } from '../../image/icon-facebook.svg';
import { ReactComponent as Insta } from '../../image/icon-instagram.svg';
import { ReactComponent as Twitter } from '../../image/icon-twitter.svg';
import { ReactComponent as Youtube } from '../../image/icon-youtube.svg';
import { ReactComponent as IconUP } from '../../image/icon-up.svg';
import { ReactComponent as IconDown } from '../../image/icon-down.svg';


export default function MainComponent() {
  return (
    <div className="">
         
        <DashHeader
        totalFollowers="22,004" 
        />
       
        <MainDash
        icon1={<Facebook />}
        username1="@DecoitoD"
        voteIcon1={<IconUP />}
        voteNum1="12"
        bigNum1="1987"

        icon2={<Twitter />}
        username2="@DecoitoD"
        voteIcon2={<IconUP />}
        voteNum2="99"
        bigNum2="1044"

        icon3={<Insta />}
        username3="@DecoitoD"
        voteIcon3={<IconUP />}
        voteNum3="1099"
        bigNum3="11K"

        icon4={<Youtube />}
        username4="@DecoitoD"
        voteIcon4={<IconDown />}
        voteNum4="144"
        bigNum4="8239"


        />
        
        
        
        <Overview
        overviewTextT1="Page Views"
        numT1="87"
        voteNumT1="3"
        iconT1={<Facebook />}
        voteIconT1={<IconUP />}

        overviewTextT2="Likes"
        numT2="52"
        voteNumT2="2"
        iconT2={<Facebook />}
        voteIconT2={<IconDown />}

        overviewTextT3="Likes"
        numT3="5462"
        voteNumT3="2257"
        iconT3={<Insta />}
        voteIconT3={<IconUP />}

        overviewTextT4="Profile Views"
        numT4="52K"
        voteNumT4="8"
        iconT4={<Insta />}
        voteIconT4={<IconUP />}

        overviewTextB1="Tweets"
        numB1="117"
        voteNumB1="303"
        iconB1={<Twitter />}
        voteIconB1={<IconUP />}
        
        overviewTextB2="Likes"
        numB2="507"
        voteNumB2="8"
        iconB2={<Twitter />}
        voteIconB2={<IconUP />}
        
        overviewTextB3="Likes"
        numB3="107"
        voteNumB3="19"
        iconB3={<Youtube />}
        voteIconB3={<IconUP />}

        overviewTextB4="Total Views"
        numB4="1407"
        voteNumB4="12"
        iconB4={<Youtube />}
        voteIconB4={<IconUP />}

        />
        
    </div>
  );
}



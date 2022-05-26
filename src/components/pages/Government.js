import React, { Component } from "react";
import "./Government.css";

const nh_exec = [
  {title:"President", ppl:[{name: "Kristina Chen", kerb: "kyxchen"}]},
  {title:"Vice President",ppl: [{name: "Emily Kang", kerb: "kemily"}]},
  {title:"Tresurer",ppl: [{name:"Christine Tang", kerb: "cwtang"}]},
  {title:"Secretary", ppl: [{name:"Margaret Wang", kerb: "mqwang"}]},
  {title:"Housing Chair", ppl: [{name: "Kristina Chen", kerb: "kyxchen"}]},
  {title:"Wellness Chair",ppl: [{name: "Dasha Castillo", kerb: "dashac"},{name: "Neha Pant", kerb: "nehapant"}]},
  {title:"Social Chair",ppl: [{name: "Juan Angel Luera", kerb: "j_luera"}, {name: "Ivy Lui",kerb:"ilui"}]},
  {title:"CPW/REX Chair",ppl: [{name: "Duha Syar", kerb: "duhasyar"}]},
  {title:"Web Chair (Best Chair)",ppl: [{name: "Thelonious Cooper", kerb: "theloni"}]},
  {title:"Facilities Chair",ppl: [{name: "David Kwabi-Addo", kerb: "dkwabiad"}]},
  {title:"Makerspace Chair",ppl: [{name: "Camacho Zamora", kerb: "beastboy"},{name:"Leonardo Zamora",kerb:"lzamora"}]}
];
const GRAs = {

}
class Government extends Component {
  constructor(props) {
    super(props);
  }
  //TODO: update with new GRAs and migrate GRAs from hardcode to array map
  render() {
    return (
      <div className='gov-container'>
        <div className='gov-gov-container'>
          <div className='gov-title'>
            Executive Officers
          </div>
          <div>
            {nh_exec.map(pos=>
                (
                <div className='gov-row'>
                  <div>{pos.title}</div>
                  <div>
                    {pos.ppl.map(person=>
                      (
                        <>
                        <div>{person.name}</div><br/>
                        </>
                      )
                      )
                    }</div>
                    <div>
                    {pos.ppl.map(person=>
                      (
                        <>
                        <div><a href={'mailto'+person.kerb}>{person.kerb+'@mit.edu'}</a></div><br/>
                        </>
                      )
                      )
                    }
                    </div>  
                </div>
                )
                )
            }
          </div>
        </div>
        {/* TODO: UPDATE GRAs */}
        <div className='gov-gov-container'>
          <div className='gov-title'>
            Graduate Residence Advisors
          </div>
          <div className='gov-row'>
            <div>iHouse</div>
            <div>Michael Luu</div>
            <div><a href='mailto:mluu@mit.edu'>mluu@mit.edu</a>
            </div>
          </div>
          <div className='gov-row'>
            <div>Chocolate City</div>
            <div>Candace Ross</div>
            <div><a href='mailto:ccross@mit.edu'>ccross@mit.edu</a></div>
          </div>
          <div className='gov-row'>
            <div>La Maison Française</div>
            <div>Joyce Kang
              <br></br>
              Jason Wang
            </div>
            <div><a href='mailto:jbkang@mit.edu'>jbkang@mit.edu</a>
              <br></br>
              <a href='mailto:jkuwang@mit.edu'>jkuwang@mit.edu</a>
            </div>
          </div>
          <div className='gov-row'>
            <div>Deutsches Haus</div>
            <div>Emily Hanhauser</div>
            <div><a href='mailto:ehanhaus@mit.edu'>ehanhaus@mit.edu</a></div>
          </div>
          <div className='gov-row'>
            <div>La Casa</div>
            <div>Lindsey Backman
              <br></br>
              Zach Nelson
            </div>
            <div><a href='mailto:lbackman@mit.edu'>lbackman@mit.edu</a>
              <br></br>
              <a href='mailto:zpn3@mit.edu'>zpn3@mit.edu</a>
            </div>
          </div>
          <div className='gov-row'>
            <div>House 2</div>
            <div>Sam Westcott McAlpine</div>
            <div><a href='mailto:alloy94@mit.edu'>alloy94@mit.edu</a></div>
          </div>
          <div className='gov-row'>
            <div>House 3</div>
            <div>Tony Shu</div>
            <div><a href='mailto:tonyshu@mit.edu'>tonyshu@mit.edu</a></div>
          </div>
          <div className='gov-row'>
            <div>House 4</div>
            <div>Georgia Van de Zande
            </div>
            <div><a href='mailto:gdvdz@mit.edu'>gdvdz@mit.edu</a>
            </div>
          </div>
          <div className='gov-row'>
            <div>Desmond</div>
            <div>Elise Newman
              <br></br>
              Berk Ozturk
            </div>
            <div><a href='mailto:esnewman@mit.edu'>esnewman@mit.edu</a>
              <br></br>
              <a href='mailto:bozturk@mit.edu'>bozturk@mit.edu</a>
            </div>
          </div>
        </div>

        <div className='gov-gov-container'>
          <div className='gov-title'>
            Houseteam
          </div>
          <div className='gov-row'>
            <div>Housemaster</div>
            <div>Wes Harris</div>
            <div><a href='mailto:weslhar@mit.edu'>weslhar@mit.edu</a></div>
          </div>
          <div className='gov-row'>
            <div>House Manager</div>
            <div>Bob Ramsay</div>
            <div><a href='mailto:bramsay@mit.edu'>bramsay@mit.edu</a></div>
          </div>
          <div className='gov-row'>
            <div>Residential Life Area Director</div>
            <div>John Ross Campbell</div>
            <div><a href='mailto:jrcamp@mit.edu'>jrcamp@mit.edu</a></div>
          </div>
        </div>

        <div className='gov-gov-container'>
          <div className='gov-title'>
            Houses Exec
          </div>
          <div className='gov-row'>
            <div>iHouse</div>
            <div><a href='mailto:ihouse-presidents@mit.edu'>ihouse-presidents@mit.edu</a></div>
          </div>
          <div className='gov-row'>
            <div>Chocolate City</div>
            <div><a href='mailto:cc_exec@mit.edu'>cc_exec@mit.edu</a></div>
          </div>
          <div className='gov-row'>
            <div>La Maison Française</div>
            <div><a href='mailto:lmf-exec@mit.edu'>lmf-exec@mit.edu</a></div>
          </div>
          <div className='gov-row'>
            <div>Deutsches Haus</div>
            <div><a href='mailto:dh-exec@mit.edu'>dh-exec@mit.edu</a></div>
          </div>
          <div className='gov-row'>
            <div>La Casa</div>
            <div><a href='mailto:la_casa-board@mit.edu'>la_casa-board@mit.edu</a></div>
          </div>
          <div className='gov-row'>
            <div>House 2</div>
            <div><a href='mailto:nh2-exec@mit.edu'>nh2-exec@mit.edu</a></div>
          </div>
          <div className='gov-row'>
            <div>House 3</div>
            <div><a href='mailto:nh3-exec@mit.edu'>nh3-exec@mit.edu</a></div>
          </div>
          <div className='gov-row'>
            <div>House 4</div>
            <div><a href='mailto:nh4-president@mit.edu'>nh4-president@mit.edu</a></div>
          </div>
          <div className='gov-row'>
            <div>Desmond</div>
            <div><a href='mailto:desmond-president@mit.edu'>desmond-president@mit.edu</a></div>
          </div>
        </div>

        <div className='gov-gov-container'>
          <div className='gov-title'>
            Bill of Rights
          </div>
          Being a resident student during your time in college should be a positive experience. Getting to know people on many levels enhances that experience. Take advantage of this special time in your life and get to know the people you are living with here in New House and across the campus. Being a part of this exciting community, living and growing with your friends, is an amazing opportunity.
          <br></br>
          <br></br>
          As a member of the New House Community, you have agreed to the New House Bill of Rights.
          <br></br>
          These basic rights include:
          <br></br>
          <div className='bullet'>
            The right to read, to study, and to live free from undue interference, unreasonable noise and other distractions which inhibit the exercise of this right.
          </div>
          <div className='bullet'>
            The right to expect that others will respect one's personal belongings.
          </div>
          <div className='bullet'>
            The right to a reasonably clean environment in which to live including:
          </div>
          <div className='bullet-2'>
            the right to designate one's room a smoke-free environment.
          </div>
          <div className='bullet-2'>
            The right to free access to one's room.
          </div>
          <div className='bullet-2'>
            The right to personal privacy.
          </div>
          <div className='bullet-2'>
            The right to be free from physical or psychological intimidation, harassment, and/or harm.
          </div>
          <br></br>
          <br></br>
          We expect that you will respect the rights of all residents of New House in the following way:

          <div className='bullet'>
            Be respectful of resident's rights to study and sleep in an environment that is conducive to that purpose.
          </div>
          <div className='bullet'>
            Be respectful of the quiet hours when they are in effect, particularly during finals week.
          </div>
          <div className='bullet'>
            Be respectful of the guest and desk policy and do your part to keep the building safe and secure. Please carry your ID card with you so you may gain entrance to the building. Please do not let people who are not known to you enter the building as you do. Please direct those people to the front desk.
          </div>
          <div className='bullet'>
            Be respectful of the shared common space by keeping them clean and cleaning up after yourselves. These areas include kitchens, bathrooms, lounges, the arcade (the first floor corridor of NH), the fitness center and Athena stations.
          </div>
          <div className='bullet'>
            We expect that you will return movies to the front desk when they are due.
          </div>
          <div className='bullet'>
            We expect that you will always be considerate of others, especially as it relates to sharing NH property and funds, attending NH activities, and being considerate of others at study breaks and other events.
          </div>
        </div>

        <div className='gov-gov-container'>
          <div className='g-title'>
            Policies
          </div>
          <div className='g-extra'>

            <a href="https://nh.scripts.mit.edu/www/docs/constitution.pdf" target="_blank" rel="noopener noreferrer">Constitution</a>
            <a href="https://nh.scripts.mit.edu/www/docs/2012HousingPolicy.pdf" target="_blank" rel="noopener noreferrer">Housing Rules</a>
            <a href="https://nh.scripts.mit.edu/www/docs/Alcohol%20Guidelines%20for%20New%20House.pdf" target="_blank" rel="noopener noreferrer">Alcohol</a>

          </div>
        </div>
      </div>
    );
  }
}

export default Government;
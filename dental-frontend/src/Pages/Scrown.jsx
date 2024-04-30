import React from "react";
import ResponsiveAppBar from "../Components/NavBar";
import Container from "../Components/Container";
import bridge1 from "../assets/images/bridge1.jpg";
import crown1 from "../assets/images/crown.webp";
import { Button } from "@mui/material";
import "../Style/Scrwon.css";
import Footer from "../Components/Footer";

export default function Scrown() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Container size="scrown1">
        <h1>Dental Crowns</h1>

        <h3>What are dental crowns?</h3>
        <p className="sss">
          Your teeth can become damaged over time. This can happen for a variety
          of reasons, like tooth decay, injuries or just use over time. Your
          teeth can lose their shape or size. Dental crowns are tooth-shaped
          “caps”. That crowns can fit over your natural tooth. Think of it like
          a snug hat for your tooth. The crown restores the tooth’s shape, size,
          strength and appearance.{" "}
        </p>
        <img className="bridge" src={crown1} alt="logo" />
        <h3>Why would I need a dental crown?</h3>
        <p className="sss">
          You may need a dental crown for several reasons, including:{" "}
        </p>

        <ul className="ul-left">
          <li>
            Protecting a weak tooth (possibly from decay) from breaking or to
            keep the weak tooth together
          </li>
          <li>Restoring a broken tooth or a severely worn down tooth</li>
          <li>
            Covering and supporting a tooth with a large filling and not much
            tooth remaining
          </li>
          <li>Holding a dental bridge in place</li>
          <li>Covering misshapen or severely discolored teeth</li>
          <li>Covering a dental implant</li>
          <li>Covering a tooth that’s been treated with a root canal</li>
        </ul>

        <h2>What are dental crowns made of?</h2>
        <p className="sss">
          Permanent crowns can be made out of many different materials. These
          materials can include:
        </p>
        <ul className="ul-left">
          <li>
            Metal: Several metals, including gold, palladium, nickel, and
            chromium, can be used in dental crowns. Metal crowns do not often
            chip or break, last the longest in terms of wear down, and require
            only a small amount of your tooth to be removed. They can also
            withstand biting and chewing forces. The metallic color is the main
            drawback of this type of crown. Metal crowns are a good choice for
            out-of-sight molars.
          </li>
          <li>
            Porcelain-fused-to-metal: This type of dental crown can be matched
            to the color of the teeth that’s next to the crown. They have a more
            natural tooth color. However, sometimes the metal under the crown’s
            porcelain cap shows through as a dark line. Other cons include the
            chance of the crown’s porcelain portion chipping or breaking off and
            the crown wearing down the teeth opposite it within the mouth.
            Porcelain-fused-to-metal dental crowns can be a good choice for
            front or back teeth.
          </li>
          <li>
            Zirconia: Dental crowns made out of zirconia are generally a bit
            more expensive than other crown types. However, they look very much
            similar to natural teeth.
          </li>
        </ul>

        <h2>Tooth preparation for a dental crown?</h2>
        <p className="sss">
          You will typically have two visits to the dentist to prepare for a
          dental crown. Many different materials can make permanent crowns.
        </p>
        <h3>The first visit</h3>
        <p className="sss">
          During the first visit, the dentist examines and prepares the tooth
          that will receive the crown. They may also take X-rays of the tooth
          and the bone around it. Your dentist might have to do a root canal
          treatment before your dental crown procedure if there’s any:
        </p>
        <ul className="ul-left">
          <li>Tooth decay</li>
          <li>Risk of infection</li>
          <li>Injury to the tooth’s pulp</li>
        </ul>

        <p className="sss">
          This will make space for the crown itself. The amount of tooth that
          gets filed away depends on the type of crown you have. All-metal
          dental crowns are thinner and don’t need as much of the tooth removed
          as all-porcelain or porcelain-fused-to-metal crowns. If too much of
          your tooth is missing — due to damage or decay — a filling material
          serves to “build up” enough tooth structure for the crown to cover.
          <br></br>
          The dentist reshapes the tooth and uses a paste or putty to make a
          copy (also known as an impression) of the tooth that will receive the
          crown. They also make impressions of the teeth above and below the
          tooth receiving the dental crown to ensure that the crown will not
          affect your bite. <br></br>
          The laboratory makes the crowns and usually returns them to the
          dentist’s office in few days. During this first office visit, your
          dentist will make a temporary crown to cover and protect the prepared
          tooth while you’re waiting on the permanent crown.
        </p>
        <h3>The second visit</h3>
        <p className="sss">
          During the second appointment, the dentist will cement the permanent
          crown onto your tooth. After removing the temporary crown, the dentist
          will examine the shape and shade of the permanent crown to make a
          final decision. If everything looks good, they may administer a local
          anesthetic (also known as a “numbing drug”) to the tooth to numb it
          before permanently cementing the replacement crown into place.
        </p>
        <h2>How long do dental crowns last?</h2>
        <p className="sss">
          On average, dental crowns last between five and 15 years. The amount
          of “wear and tear” a crown endures, as well as how well you practice
          good oral hygiene and other habits that affect your mouth, can affect
          the length of time a crown lasts.These mouth-related habits can
          include things like:{" "}
        </p>
        <ul className="ul-left">
          <li>Grinding or clenching your teeth</li>
          <li>Chewing ice</li>
          <li>Biting your fingernails</li>
          <li>Using your teeth to open packaging</li>
        </ul>
      </Container>

      <Container size="scrown2">
        <h1>Dental Bridges</h1>
        <p className="sss">
          If you have missing teeth, including front teeth, a dental bridge can
          help restore the look and function of your teeth. It bridges the gap
          where the missing tooth is. Talk to a dental professional to find out
          if it’s right for you.
        </p>
        <img className="bridge" src={bridge1} alt="logo" />
        <h2>What are dental bridges?</h2>
        <p className="sss">
          If you have one or more missing teeth, a dental bridge can fill the
          gap with one or more artificial (false) teeth. A bridge is typically
          made of crowns on either side of the missing tooth or teeth supporting
          the pontic (false tooth) and is cemented in place.
        </p>
        <h2>Who needs a dental bridge?</h2>
        <p className="sss">
          Dental bridges can help if you have a missing tooth or teeth. The most
          common causes of missing teeth are tooth decay, gum disease and
          injury. Or you may have been born with missing teeth due to a
          congenital condition. To get a dental bridge, you need healthy teeth
          on either side of the missing ones.
        </p>
        <h2>Why do I need a dental bridge?</h2>
        <p className="sss">
          Your teeth work together. If a tooth is missing, nearby teeth can move
          into the empty space. The teeth in your opposite jaw can also move up
          or down toward the space. This can cause:
        </p>
        <ul className="ul-left">
          <li>Bite problems</li>
          <li>Chewing difficulties</li>
          <li>Pain from the extra stress on your teeth and jaw</li>
          <li>Self-consciousness about the way you look or your smile</li>
        </ul>

        <h2>What does a dental bridge look like?</h2>
        <p className="sss">A typical dental bridge has:</p>
        <ul className="ul-left">
          <li>
            Abutment teeth: A dental professional places two crowns on the teeth
            on either side of the gap. These anchoring teeth, or supporting
            teeth, can be your natural teeth or dental implants.
          </li>
          <li>
            Pontics: This false tooth (or teeth) fills in the gap and attaches
            to the crowns.
          </li>
        </ul>

        <h2>What types of dental bridges are available?</h2>
        <p className="sss">The four main types of bridges are:</p>
        <ul className="ul-left">
          <li>
            Traditional fixed bridge: This bridge is the most common. It has two
            or more crowns and a filler tooth or teeth that are all connected.
            The crowns keep the bridge in place. Traditional bridges are made of
            metal, porcelain fused to metal, or ceramics.
          </li>
          <li>
            Cantilever bridge: In this bridge type, the pontic connects to only
            one abutment tooth. This can sometimes be an option for people who
            have teeth on only one side of the gap.
          </li>
          <li>
            Maryland dental bridge (resin-bonded bridge): You may have this type
            of bridge if you have missing front teeth. It’s made of porcelain
            fused to metal or ceramic teeth, supported by a framework. Wings on
            each side of the bridge bond to your existing teeth.
          </li>
          <li>
            Implant-supported bridge: This bridge is similar to a “traditional
            fixed bridge” but instead of being cemented in place to teeth, it is
            held in place by implants.
          </li>
        </ul>

        <h2>What can I use instead of a dental bridge?</h2>
        <p className="sss">
          Some people choose partial dentures, which are removable false teeth.
          You take them out to clean them. You may also be a candidate for a
          dental implant. An implant is surgically placed in your jaw. Your
          dentist can help you figure out what the best option is for you.{" "}
        </p>
        <h2>
          What happens during a procedure for a traditional dental bridge?
        </h2>
        <p>You’ll typically need at least two appointments:</p>
        <ul className="ul-left">
          <li>
            Abutment teeth preparation: During your first visit, your healthcare
            provider reshapes the abutment teeth. They’ll remove part of the
            enamel and dentin, so there’s room for the crown.
          </li>
          <li>
            Impressions: Your provider takes impressions or a digital scan of
            your teeth. A dental laboratory uses the mold or scan as a model to
            create your bridge, false teeth, and crowns. You’ll have a temporary
            bridge to protect the exposed areas in your mouth while the lab
            makes your bridge.
          </li>
          <li>
            Permanent bridge placement: During your second visit, your provider
            removes the temporary bridge and places the permanent bridge. Your
            provider will carefully check the bridge and make any needed
            adjustments to make sure it fits you comfortably.
          </li>
        </ul>

        <h2>What are the advantages of this procedure?</h2>
        <p className="sss">A dental bridge can:</p>
        <ul className="ul-left">
          <li>Help your bite.</li>
          <li>Prevent remaining teeth from moving out of place.</li>
          <li>Restore your ability to chew and speak.</li>
          <li>Restore your smile.</li>
        </ul>

        <h2>Do dental bridges have any risks or complications?</h2>
        <p className="sss">
          If you care for your bridge properly, it can last many years without
          complications. The bridge may fail if the surrounding teeth decay or
          if the cement deteriorates. If the bridge comes loose and the
          supporting teeth are still healthy and intact, your provider may be
          able to re-attach it with new cement.
        </p>
        <h2>How long do dental bridges last?</h2>
        <p className="sss">
          With good oral hygiene and regular professional cleanings, the bridge
          may last more than 10 years.
        </p>
        <h2>Will the dental bridge change how I speak?</h2>
        <p className="sss">
          If you are missing front teeth, it can be hard to speak clearly. A
          dental bridge with front teeth in the right place can improve your
          speech.{" "}
        </p>
        <h2>How do I care for my dental bridge?</h2>
        <p className="sss">
          The success of the dental bridge depends on the health and strength of
          the remaining teeth. With a bridge, it’s especially important to
          prevent tooth decay and gum disease that can lead to tooth loss. For
          proper tooth and gum care, you should:
        </p>
        <ul className="ul-left">
          <li>
            Brush twice a day and floss daily: A dental professional can show
            you the right way to brush and floss. You will probably use a
            special type of floss called a threader that lets you slide the
            floss between the bridge and your gum.
          </li>
          <li>
            Get regular professional cleanings: Seeing a dental provider
            regularly can help detect problems early, when treatment is more
            successful.
          </li>
          <li>
            Eat a balanced diet: Include plenty of fruits, vegetables, and fiber
            and try to limit chewy, fibrous foods like some meats.
          </li>
        </ul>

        <Button variant="contained" sx={{ fontSize: "50px" }}>
          Book Now
        </Button>
      </Container>
      <Footer />
    </div>
  );
}

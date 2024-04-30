import React from "react";
import ResponsiveAppBar from "../Components/NavBar";
import Container from "../Components/Container";
import "../Style/Simplant.css";
import implant from "../assets/images/implants.webp";
import { Button } from "@mui/material";
import Footer from "../Components/Footer";

export default function Simplant() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Container size="simplant1">
        <h1>Dental Implants</h1>
        <img className="implant" src={implant} alt="implant" />
        <h2>Summery</h2>
        <p className="sss">
          Dental implants are a type of tooth replacement that are made up of
          three parts: the implant (a small titanium fixture), the abutment (a
          connecting structure), and the artificial tooth. They are surgically
          placed in the jawbone and serve as a new root for missing teeth.
          Dental implants are common, safe, and can last a lifetime if taken
          care of properly. They look and function like natural teeth and are a
          reliable way to replace missing teeth. The procedure to get dental
          implants may cause some discomfort, but most people find it to be less
          painful than they expected. The timeline for the procedure can take
          anywhere from 3 to 9 months. There is a small chance of infection,
          pain, or inflammation, but these negative effects are rare. The
          benefits of dental implants include improved appearance, confidence,
          ability to eat and live an active lifestyle, and a long lifespan. They
          have a success rate around 98%.
        </p>
        <h2>What Are Dental Implants?</h2>
        <p className="sss">
          This is perhaps one of the most common and obvious first questions to
          ask before dental implants. <br></br>A dental implant isn’t an actual
          tooth, but rather a prosthesis used for replacing missing teeth.
          Basically, it’s a small titanium fixture the dentist inserts into your
          jawbone, on top of which the dentist can attach a:
        </p>
        <ul className="ul-left">
          <li>Fixed Dental Bridge</li>
          <li>Single crown (cap)</li>
          <li>Full denture</li>
          <li>Partial denture</li>
        </ul>
        <p className="sss">
          After the implant integrates to the bone, the dentist connects a
          structure known as an abutment to your implant and then attaches your
          artificial tooth or teeth. So, there are three parts to the process —
          the implant, the abutment and the artificial tooth. <br></br>
          The dentist surgically places dental implants in your jawbone.
          Implants serve as your missing teeth’s roots. Since the titanium in
          the dental implants fuses with your jawbone, the dental implants won’t
          make noise, slip or cause bone damage like dentures or fixed
          bridgework may. Plus, the materials don’t decay like your natural
          teeth supporting regular bridgework could.
        </p>
        <h2>Are Dental Implants Common?</h2>
        <p className="sss">
          Tooth loss is a prevalent issue. Because of this, dental implant use
          is also a common practice. There are various reasons why so many
          individuals are turning to implants to replace their missing teeth or
          those the dentist can’t save, including:
        </p>
        <ul className="ul-left">
          <li>
            To replace individual missing teeth: Many individuals find
            themselves with a broken or decayed tooth that restorative dental
            work, such as root canals, crowns, and fillings, can’t save. They
            end up needing to have the tooth removed before infection begins
            spreading.
          </li>
          <li>
            To replace multiple teeth: Since dental implants are incredibly
            sturdy, they’re successfully used for stabilizing dental bridges.
          </li>
          <li>
            For their reliability: One dental implant that’s taken care of
            properly can last the patient’s lifetime. Dental implants typically
            last a lot longer than other dental restorations.
          </li>
          <li>
            For their appearance: Implants are made to look like natural teeth,
            making them very aesthetically pleasing.
          </li>
        </ul>
        <h2> Are Dental Implants Safe?</h2>
        <p className="sss">
          Dentists have used dental implants for many years, and implant
          technology continues to advance. Today, dental implants are
          sophisticated devices that highly trained professionals put in place.
          They’re one of the most reliable ways to replace missing teeth.
        </p>
        <h2>How Painful Is Getting a Dental Implant?</h2>
        <p className="sss">
          While discomfort can vary between people, most individuals report
          getting their dental implant was much less uncomfortable than they
          anticipated it to be. During the surgical dental implant procedure,
          the dentist will give you an anesthetic, so you should feel minimal
          discomfort if any. <br></br>
          They’ll use gentle techniques, and since the environment they’re
          working in is clean, there’s little risk of infection. If you follow
          the dentist’s post-operative instructions and take the prescribed
          antibiotics, you should experience minimal discomfort. Your dentist
          will likely prescribe you pain medication as well, but many
          individuals don’t use them.
        </p>
        <h2>How Long Does a Dental Implant Procedure Take?</h2>
        <p className="sss">
          A few factors determine the dental implant procedure timeline. They
          are:
        </p>
        <ul className="ul-left">
          <li>Your dental health</li>
          <li>Which teeth are replaced</li>
          <li>The number of teeth involved</li>
          <li>
            If you’ll require a tooth extraction before the implant placement
          </li>
        </ul>
        <p className="sss">
          The dentist restores your mouth with an implant in two phases and the
          entire process can take around three to nine months. It could take
          even longer if you have an extraction that has to heal, or if you
          needed bone grafts before the dentist implanted the posts.
        </p>
        <h2>What Is the Downside of Dental Implants?</h2>
        <p className="sss">
          Similar to any oral surgical procedure, there is a chance of
          infection, pain and inflammation. However, negative effects are rare
          and usually minor if they do occur. Your dentist will talk with you
          about how they can manage these risks for your specific situation.{" "}
          <br></br>
          Also, if the dentist can’t place the implant because there’s no
          available bone, then you may require a bone and gum grafting
          procedure, which could increase your treatment cost.
        </p>
        <h2>What Is the Upside of Dental Implants?</h2>
        <p className="sss">
          Fortunately, humans get two sets of teeth. When you lose a single
          tooth or multiple teeth because of gum disease or dental decay,
          implants can now replace them and serve as your third set of fixed
          teeth. Implants have many upsides, including:
        </p>
        <ul className="ul-left">
          <li>They improve your appearance</li>
          <li>They improve your confidence</li>
          <li>They can last a lifetime</li>
          <li>They allow you to have an active lifestyle</li>
          <li>They improve your ability to eat the foods you like</li>
          <li>You no longer have to worry about your teeth</li>
          <li>They never decay because they’re made of titanium</li>
        </ul>
        <Button variant="contained" sx={{ fontSize: "50px" }}>
          Book Now
        </Button>
      </Container>
      <Footer />
    </div>
  );
}

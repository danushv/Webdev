export default function Section({ title }) {
  return;
  <section>
    <h2>{title}</h2>
  </section>;
}
// this title in line 5 should be set dynamically with help of props so it should
// be configurable where this section is used that is why we pass title as parameter in the function

//we can aslo get special children prop so that we can usethe special children prop so that we can use our section component,our custom component here

//as a wrapper around the actual section content that should go below this title because we can then use this children prop

//to output it here below the title. And building a component like this then allows us to use it.

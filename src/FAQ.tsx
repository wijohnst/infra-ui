import * as React from "react";
import { Accordion } from "./accordion";
import { Content } from "./Content";

import { FAQContainer } from "./FAQ.styles";
import { GradDivider } from "./GlobalComponent.styles";

export const FAQ = (): React.ReactElement => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <Content>
      <FAQContainer>
        <h1>FREQUENTLY ASKED QUESTIONS</h1>
        <div className="accordion-container">
          <Accordion
            title="Why does the water main need to be replaced?"
            key="accordion-1"
          >
            <p>
              Much of the existing water pipes in the downtown were built in the
              early 1900s. The water main has been patched so many times that it
              is not feasible to patch it anymore. The condition of the existing
              water system has created hardships for several downtown property
              owners trying to refurbish their properties; for example, the pipe
              cannot support the water pressure needed to comply with current
              fire suppression systems. The City of Lewiston received federal
              funding to upgrade the downtown water system under the ARPA
              Program, worth approximately $5.7 million dollars. The work has
              already been completed from Locomotive Park to 9th Street. It is
              now time to replace the water main through the rest of downtown;
              the ARPA dollars need to be spent by the end of 2026 or we lose
              the money.
            </p>
          </Accordion>
          <Accordion
            title="Why does the Sewer Line need to be replaced?"
            key="accordion-2"
          >
            <p>
              Did you know that all of the wastewater generated on the Southside
              of the river in the City of Lewiston, including much of the
              Orchards, flows through downtown? Think of the grade… everything
              flows down towards the river. The sewer line handling the bulk of
              this flow is 90 years old and is at 70% or more capacity. Like the
              water main, there are cracks and leaks and it is becoming
              impossible to repair. Nobody wants a sewer leak on their property!
              The larger problem is when the sewer fails… do we wait until that
              happens, clogging toilets up through the Orchards, at a future
              cost that will also involve mitigation and lawsuits, or do we
              replace it now when construction costs are lower and the federal
              government is already paying for us to tear up the street? Digging
              twice is very time consuming and costly and disrupts the downtown
              businesses twice. None of them would survive. The most
              cost-effective and efficient option is to replace them both at the
              same time.
            </p>
          </Accordion>
          <Accordion
            title="Why do we need Storm Water improvements?"
            key="accordion-3"
          >
            <p>
              Have you noticed there are pools of water downtown every time it
              rains? Like the water and sewer lines, the storm water drains have
              been attached and reattached over the years and don’t contain the
              flow needed to support the runoff through downtown. As with the
              sewer line, if the City is already digging down with federal
              money, why not also install proper drainage?
            </p>
          </Accordion>
          <Accordion
            title="What other improvements are needed?"
            key={"accordion-4"}
          >
            <p>
              If the City is digging up for the water main, the sewer line, and
              storm water drains, it makes sense to also lay the cables at the
              same time. Huge cost savings and huge benefits for anyone
              connecting online—a project we cannot do it the street isn’t
              already torn up.
            </p>
          </Accordion>
          {isOpen && (
            <React.Fragment>
              <Accordion title="What will this cost?" key={"accordion-5"}>
                <p>
                  Nothing to taxpayers. The City of Lewiston can do this whole
                  project by issuing a Bond paid for by money already set aside
                  and committed from existing taxes and utility revenue.
                  However, if the Bond fails, taxpayers will see taxes increases
                  when these systems fail—not just the increased cost for
                  construction, plus the cost of tearing up the street again,
                  but mitigation costs for the damage that would ensue. Taxes
                  will have to be raised to pay for these improvements if we
                  wait for a later date. The total cost for the Bond will be $25
                  million, paid over 30 years. The payment each year is about
                  $1.8 million.
                </p>
              </Accordion>
              <Accordion
                title="Where is the money coming from to pay the interest every year?"
                key={"accordion-6"}
              >
                <p>
                  There are a few places: first, the City dedicates a portion of
                  each year’s utility budgets to replacement of outdated
                  infrastructure.  These funds can only be spent on the utility
                  the funds were collected for.  By pooling these utility
                  ‘capital’ funds into a single larger project the project there
                  are efficiencies in the construction because the road does not
                  need to be dug up multiple times. The City also has funds that
                  are dedicated to road construction and other infrastructure
                  improvements—this project qualifies for those dollars. They
                  would use these allocated funds to pay the interest on the
                  Bond. The money saved by not needing to keep patching and
                  repairing the pipes can also be used for these payments.
                </p>
              </Accordion>
              <Accordion
                title="Why not save the $1.8 million each year and build when the money is saved?"
                key="accordion-7"
              >
                If the City of Lewiston saves the money, it will cost more in
                the long run. The cost of inflation, both in materials and labor
                just keeps going up. It will become increasingly expensive to
                save, complete a project, only to dig again in a couple of years
                for the next one. Taxes would have to go up to pay for this, as
                the construction costs alone (not to mention paying again and
                again to tear up the street and up it back together) would far
                exceed the cost of doing it all at once through Bond financing.
              </Accordion>
              <Accordion
                title="Why do we have to vote on this if it won’t raise taxes?"
                key="accordion-8"
              >
                <p>
                  The State of Idaho is one of a few states that require a
                  citizen vote to enable the City to issue a Bond even if the
                  revenue for the payments is already secured. This is why there
                  is a Bond vote on the Ballot for May 20th.
                </p>
              </Accordion>
              <Accordion title="Why does the ballot language have a tax increase?">
                <p>
                  The State of Idaho requires that voters are aware of the cost
                  to finance the Bond in the event that the City is unable to
                  finance the Bond. The City has outlined a budget using
                  existing revenue that will be used to pay the interest, so
                  there will be no tax increase because of this Bond. That
                  information can be found at the City’s{" "}
                  <a
                    href="https://www.cityoflewiston.org/843/9842/Lewiston-Main-Street-Project"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    website
                  </a>
                </p>
              </Accordion>
              <Accordion title="Why does the business community support this project?">
                <p>
                  The Chamber, along with hundreds of businesses and residents,
                  support this effort because we don’t want taxes to increase at
                  a later date. We want to fix these problems proactively to
                  ensure that businesses and residents aren’t dealing with the
                  fallout of other structural failures—whether downtown or in
                  the Orchards. We also support the downtown businesses who are
                  unable to develop, expand, and use their properties because of
                  these issues. This affects the vitality of our whole region
                  when we can’t attract businesses to open along Main Street.
                </p>
              </Accordion>
              <Accordion title="What happens after the infrastructure is fixed? ">
                <p>
                  When the project is done, the streets and sidewalks will have
                  to be put back together. If we are repaving the streets
                  anyway, why not save money and create a downtown
                  destination--attracting tourists and a space for our City to
                  thrive? Some ideas include roundabouts and two-way traffic
                  along Main Street. Those don’t have to be done. Other ideas
                  include a plaza (this saves $2 million by not re-installing
                  the controlled intersection at 3rd and D street), a festival
                  street (instead of pouring the concrete for a curb, the
                  sidewalk flows naturally into the street for multiple uses),
                  and a boulevard. All of these preserve or increase the number
                  of parking spaces, save money on the reconstruction, and
                  create a beautiful downtown in the process.
                </p>
              </Accordion>
              <Accordion title="I support the infrastructure, but I don’t like 2-way traffic or roundabouts. What should I do?">
                <p>
                  Don’t like the idea of roundabouts or two-way traffic? Tell
                  your Council members. Those are separate issues from needing
                  to replace the aging infrastructure, or forcing the City to
                  tear up the streets multiple times. They can be changed at a
                  later date, once the digging is done.
                </p>
              </Accordion>
              <Accordion title="I don’t trust the City. My taxes have been increasing every year!">
                <p>
                  Property taxes for residents haven’t increased, but the
                  assessed value of residential property has. This is a problem
                  all over Idaho as residential property values have skyrocketed
                  since COVID. Thus, while the tax rate has stayed the same, the
                  value of your home has increased. As a hypothetical example,
                  let’s say your tax rate is 1%, and your residential property
                  was valued at $100,000 about 5 years ago. Now it is valued at
                  $200,000, so the amount you pay has doubled—from $1000 to
                  $2000. If you don’t think the assessed value is fair, contact
                  the County Assessor. Also, the City does not have any control
                  over a property’s assessed value; that is determined by the
                  Nez Perce County Assessor.
                </p>
              </Accordion>
              <Accordion title="Where is all the money going?">
                <p>
                  Just like most households, the City has experienced increases
                  in just about every good and service they provide. For
                  example, have your insurance and utility rates increased? So
                  have the City’s! In order to maintain the same level of
                  service, from police to road repair, it’s simply costing
                  more—for labor, for construction, for supplies.
                </p>
              </Accordion>
              <Accordion title="Why vote YES?">
                <p>
                  Taxpayers can wait until there is a critical infrastructure
                  breakdown to do the needed replacing, which is costly—not only
                  will the City have to replace or repair the infrastructure,
                  the City would also have to foot the bill for the damage. And,
                  each time that happens, the City will have to tear up the
                  street again to do the repair work. Multiple reconstructions
                  and the increasing cost of construction will ultimately cost
                  taxpayers more.{" "}
                  <strong>
                    Thus, taxes will likely increase if Lewiston residents wait
                    to fix these problems. The way to avoid increasing taxes and
                    failed systems is to replace everything now while the City
                    is already replacing the water main.
                  </strong>{" "}
                  A YES vote enables the City to issue a bond that would provide
                  the funding for this entire project—the most cost-effective
                  way to fix storm water, keep the sewer flowing, upgrade our
                  utilities, all while the digging is already paid for by the
                  federal government.{" "}
                </p>
              </Accordion>
            </React.Fragment>
          )}
          <div className="faq-controls">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      </FAQContainer>
      <GradDivider>
        <hr />
      </GradDivider>
    </Content>
  );
};

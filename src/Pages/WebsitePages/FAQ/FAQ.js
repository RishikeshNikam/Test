import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Grid, Form, Tab, Tabs, Table } from "react-bootstrap";

class FAQ extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: "LenderFAQ"
    };
  }

  render() {
    return (
      <div className="FAQ-Main">
        <div className="FAQ-Section">
          <Grid>
            <h2>Frequently Asked Questions</h2>
            <h3>
              New to Z2P or wondering where to start ? Feel free to{" "}
              <Link to="/Website/ContactUs">Contact Us</Link> !
            </h3>
            <br />
            <br />
            <div>
              <Tabs
                id="controlled-tab-example"
                activeKey={this.state.key}
                onSelect={key => this.setState({ key })}
              >
                <Tab eventKey="LenderFAQ" title="Lender FAQs">
                  <ol className="Main-ol">
                    <li>
                      <h3>How do I become an investor on Z2P?</h3>
                      <div className="Border-Orange">
                        <h4>
                          You need to sign up on the app and update your basic
                          profile info. Go to the lend amount section and
                          “pledge” the amount you want to lend. You will then
                          receive an email to explain you the process and
                          connect you to our lenders’ team. No Upfront fee or
                          charges are taken by our company.
                        </h4>
                      </div>
                    </li>

                    <hr />

                    <li>
                      <h3>What happens If the borrowers repay late?</h3>
                      <div className="Border-Orange">
                        <h4>In the case of late repayment,</h4>
                        <ol>
                          <li>
                            <h4>
                              We keep following up with the borrower and
                              initiate recovery actions.
                            </h4>
                          </li>
                          <li>
                            <h4>
                              Whenever a loan is repaid, you will get the
                              interest for the late days* as well (late days
                              –(2-4)days depending on banking delays)
                            </h4>
                          </li>
                          <li>
                            <h4>
                              loan is considered defaulted after 3-months, after
                              which, we will initiate the process of Lender
                              Protection Fund refund.
                            </h4>
                          </li>
                        </ol>
                        <h4>
                          Also, once you become a lender, you will get access to
                          a Lender’s Dashboard where you can keep track of all
                          your loans and the Z2P company statistics like: loan
                          defaults, disbursals, etc.
                        </h4>
                      </div>
                    </li>

                    <hr />

                    <li>
                      <h3>How does the Lender Protection Fund works?</h3>
                      <div className="Border-Orange">
                        <h4>
                          Out of the 5% returns you receive, 4% of it will be
                          transferred to your bank account. The remaining 1%
                          from you and all other lenders will be used to create
                          a Lender Protection Fund (LPF) which is used to refund
                          certain portions of your invested amount when a loan
                          is defaulted.
                        </h4>
                        <br />
                        <h4>The refund criteria is as follows:</h4>
                        <Table align="center" bordered>
                          <thead>
                            <tr>
                              <th>
                                Running loan amount(in active loans) at the time
                                of loan default
                              </th>
                              <th>Percentage Principal Refund</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>INR 0 - INR 1 Lac</td>
                              <td>50%</td>
                            </tr>
                            <tr>
                              <td>INR 1Lac - INR 3Lac</td>
                              <td>60%</td>
                            </tr>
                            <tr>
                              <td>INR 3Lac - INR 5Lac</td>
                              <td>70%</td>
                            </tr>
                            <tr>
                              <td>INR 5Lac - INR 8Lac</td>
                              <td>80%</td>
                            </tr>
                            <tr>
                              <td>INR 8Lac - INR 10Lac</td>
                              <td>90%</td>
                            </tr>
                          </tbody>
                        </Table>
                        <h4>
                          The first column implies that if at the time of your
                          loan default, your running loan amount (in active
                          loans) on our platform falls in the above mentioned
                          category, you will get the corresponding percentage
                          principal refund.
                        </h4>
                        <br />
                        <ol>
                          <li>
                            <h4>
                              The LPF will be transparent and visible to all the
                              lenders on their lender dashboard.
                            </h4>
                          </li>
                          <li>
                            <h4>
                              The refunds are subjected only upon the
                              availability of funds in the LPF at the time of
                              declaration of the loan as “defaulted”
                            </h4>
                          </li>
                          <li>
                            <h4>
                              According to RBI, a loan can be considered as
                              defaulted only after 3 months from the date of
                              loan disbursement. After this, we carry our
                              recovery procedure which takes 1-90 days. If the
                              loan is still unpaid, we then categorise it as
                              defaulted. However, if it is known that a loan is
                              certainly going to be defaulted even before the 3
                              month period, the same will be classified as
                              defaulted.
                            </h4>
                          </li>
                        </ol>
                      </div>
                    </li>

                    <hr />

                    <li>
                      <h3>How much money can I lend?</h3>
                      <div className="Border-Orange">
                        <h4>
                          As per RBI, the maximum that you can lend across all
                          P2P platforms is INR 10Lac.
                        </h4>
                      </div>
                    </li>

                    <hr />

                    <li>
                      <h3>
                        Do I have to put money upfront into my Z2P account?
                      </h3>
                      <div className="Border-Orange">
                        <h4>
                          No, you will first need to just pledge the amount.
                          Based on the pledged amount, we will send you loan
                          requests. On accepting the requests, you will need to
                          transfer the money.
                        </h4>
                      </div>
                    </li>

                    <hr />

                    <li>
                      <h3>Is my interest income through Z2P taxable?</h3>
                      <div className="Border-Orange">
                        <h4>
                          All repayments you receive from Borrowers on Z2P will
                          be without any tax deduction. We'll provide an annual
                          income statement to you to download from your
                          dashboard. Earnings will be taxable as per the income
                          tax rules that apply to you. Paying the applicable tax
                          on income earned is your responsibility and Z2P is not
                          liable for any default on the same.
                        </h4>
                      </div>
                    </li>

                    <hr />

                    <li>
                      <h3>
                        Can a non-individual lend through Z2P? Can I invest
                        through my company?
                      </h3>
                      <div className="Border-Orange">
                        <h4>
                          Yes, we encourage that. You can contact us at
                          contact@zup.today to discuss this further.
                        </h4>
                      </div>
                    </li>
                  </ol>
                </Tab>
                <Tab eventKey="BorrowerFAQ" title="Borrower FAQs">
                  <ol className="Main-ol">
                    <li>
                      <h3>Loan Disbursement Process</h3>
                      <div className="Border-Orange">
                        <ol>
                          <li>
                            <h4>
                              We evaluate your application and give you a loan
                              limit.
                            </h4>
                          </li>
                          <li>
                            <h4>
                              If you agree, you have to pay a one-time
                              processing fee mentioned in the email you get.
                              (This is just a one-time payment, your future
                              loans will be free)
                            </h4>
                          </li>
                          <li>
                            <h4>
                              We disburse the amount within 24 hours of fee
                              payment. All loans are disbursed only via UPI.
                            </h4>
                          </li>
                        </ol>
                      </div>
                    </li>

                    <li>
                      <h3>
                        What happens in case of delayed or non-payment of EMI?
                      </h3>
                      <div className="Border-Orange">
                        <h4>
                          Z2P is a legal entity under Zaitech Technologies
                          Private Limited.
                        </h4>
                        <h4>
                          We respect our users and would encourage timely
                          repayment of loans and have till now not witnessed any
                          case where a user has refused to repay back.
                        </h4>
                        <h4>
                          We are however flexible in extending the date of
                          repayment(for a max of 20 days) if the reason is
                          genuine: there will, however, be extension charges
                          ranging from Rs50 to Rs300 per day.
                        </h4>
                        <h4>
                          In the case of non-repayment of loans or delayed
                          repayment without prior notice.
                        </h4>
                        <h4>
                          While applying for a loan, you accept our terms &
                          conditions which make you legally bind to us, which
                          means:
                        </h4>
                        <ol>
                          <li>
                            <h4>
                              We will call and message all your phonebook
                              contacts.
                            </h4>
                          </li>
                          <li>
                            <h4>
                              We will use all legal methods for recovery of
                              funds and also initiate legal proceedings if
                              required.
                            </h4>
                          </li>
                          <li>
                            <h4>
                              We might proceed towards changing your Cibil
                              score, which will make it very difficult for you &
                              your connected family members to avail financial
                              services from banks in future (like loans, savings
                              account, etc.
                            </h4>
                          </li>
                          <li>
                            <h4>
                              For students, we might contact their
                              dean/placement officer which might pose problems
                              during your placements.
                            </h4>
                          </li>
                          <li>
                            <h4>
                              For employees, we might approach your Company
                              Head/Manager & inform him of the default which
                              might result in you getting black-listed.
                            </h4>
                          </li>
                        </ol>
                      </div>
                    </li>

                    <li>
                      <h3>How do I apply for a loan?</h3>
                      <div className="Border-Orange">
                        <h4>
                          After registering, go to the “Update Profile” Section
                          and update all the fields. You will then see your loan
                          limit after that and can apply for a loan. Once
                          applied, our team will contact you soon and tell you
                          the status of your loan. In case you don't hear from
                          us within 24hours after applying, please write us a
                          mail at contact@z2p.today.
                        </h4>
                      </div>
                    </li>

                    <li>
                      <h3>How do I increase my loan limit?</h3>
                      <div className="Border-Orange">
                        <h4>
                          The more your profile is updated, the more loan you
                          can take. Also, the loan limit increases upon timely
                          repayments.
                        </h4>
                      </div>
                    </li>

                    <li>
                      <h3>Can I re-pay my loan before the due date?</h3>
                      <div className="Border-Orange">
                        <h4>
                          Yes, you can. It highly increases your chances for a
                          higher next loan limit.
                        </h4>
                      </div>
                    </li>

                    <li>
                      <h3>Can I be both, a Lender and a Borrower?</h3>
                      <div className="Border-Orange">
                        <h4>
                          Yes, you can be. But first you have to clear all your
                          pending loans.
                        </h4>
                      </div>
                    </li>

                    <li>
                      <h3>
                        Are all my documents and data I am providing you safe?
                      </h3>
                      <div className="Border-Orange">
                        <h4>
                          Absolutely! We use state-of-the-art technology and
                          your data is shared with no one. We use bank-grade
                          security of the highest level.
                        </h4>
                      </div>
                    </li>
                  </ol>
                </Tab>
              </Tabs>
            </div>
          </Grid>
        </div>
      </div>
    );
  }
}

export default FAQ;

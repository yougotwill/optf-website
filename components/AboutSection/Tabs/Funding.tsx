import Image from 'next/image';

const Funding = () => {
  return (
    <div className="text-gray-500">
      <p>
        We consider a wide range of proposals. In the past, we have granted
        funding ranging from a few hundred dollars to hundreds of thousands of
        dollars. The level of funding granted is dependent on the scope of your
        proposal and the level of resources available at the time. If you would
        like to discuss an initiative prior to submitting a formal proposal,
        please contact the OPTF Secretary via team@optf.ngo.
      </p>
      <br />
      <h4 className="text-xl">Funding criteria</h4>
      <br />
      <p> Currently, we focus on funding initiatives which:</p>
      <br />
      <ul className="list-disc">
        <li>
          Contribute directly to our projects by helping us develop privacy
          technologies, participating in education initiatives, or providing
          other services
        </li>
        <li>
          Make relevant contributions to projects we rely on, such as Monero,
          Signal, or other open-source projects
        </li>
      </ul>
      <br />
      <p>However, other initiatives may also be considered.</p>
      <br />
      <h4 className="text-xl">Proposal submission and review process</h4>
      <br />
      <p>
        Funding proposals should follow the template outlined in this PDF
        document. Please ensure you respond to all sections. Attach the
        completed proposal form, along with any other relevant materials, to an
        email addressed to secretary@optf.ngp. The subject of the email should
        be ‘Proposal for Funding’.
      </p>
      <br />
      <p>
        Once your proposal is submitted, it will be acknowledged by the
        Secretary via email. The Secretary will conduct an initial review of
        your proposal, and assess whether it is appropriate for consideration by
        the board. The Secretary may contact you to suggest changes to your
        proposal or request additional information.
      </p>
      <br />
      <p>
        If the Secretary approves your proposal for consideration by the board,
        you will be informed as to the date of the next expected board meeting.
        Regular board meetings occur every 2 months. However, if your proposal
        is time sensitive, you should indicate this in your submission; the
        board may convene a special meeting to expedite consideration of your
        proposal.
      </p>
      <br />
      <p>
        All proposals are subject to a vote by the OPTF board members. Once the
        board has voted on your proposal, you will be notified of the outcome
        via email. If your proposal is successful, we will contact you to
        discuss the next steps, including further communication about the
        specific parameters and outcomes of your proposal, coordinating
        agreements, and establishing payment schedules.
      </p>
      <br />
    </div>
  );
};

export default Funding;
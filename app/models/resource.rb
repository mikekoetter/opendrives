class Resource < MailForm::Base
  attribute :first_name,      :validate => true
  attribute :last_name,      	:validate => true
  attribute :email,     			:validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :company_name, 		:validate => true
  attribute :phone
  attribute :message
  attribute :nickname,  			:captcha  => true

  # Declare the e-mail headers. It accepts anything the mail method
  # in ActionMailer accepts.
  def headers
    {
      :subject => "Support Request from opendrives.com",
      :to => "support@opendrives.com",
      :from => "support@opendrives.com"
    }
  end

  def faqs
    [
      ["What is OpenDrives and how do I connect to it?", "OpenDrives creates extremely fast, low latency, network attached storage (NAS) systems. You connect to an OpenDrives system using network industry standard networking protocols. OpenDrives supports NFSv3 and NFSv4 and SMB versions 1.x and 2.x."],
      ["Do I need to install special software?",  "No, there are no client side drivers, applications, or licenses that are required for connectivity."],
      ["How much does it cost to add clients?", "$0.00. Nothing. Nada. There’s no per-client licensing fees or costs."],
      ["How many clients can I connect to my OpenDrives system?", "There’s no limit to the number of clients, just keep in mind you’ll want to make sure you have enough performance resources to support your clients’ workflow. It’s cool though - OpenDrives will help you design your system to meet your needs!"],
      ["What kind of clients can I connect?", "Open Drives is compatible with pretty much any client platform that implements NFS and SMB according to the interoperable standard. Some (I’m looking at you, MacOS X 10.7!) aren’t good network citizens, so we recommend staying far away from them. Here is a list of client platforms we frequently work with:
        <div class='col-sm-4'>
          <ul>
            <li class='bold big'>apple:</li>
            <li>OS X 10.6.8 (Snow Leopard)</li>
            <li>OS X 10.8.5 (Mountain Lion)</li>
            <li>OS X 10.9.5 (Mavericks)</li>
            <li>OS X 10.10.5 (Yosemite)</li>
            <li>OS X 10.11.5 (El Capitan)</li>
          </ul>
        </div>
        <div class='col-sm-4'>
          <ul>
            <li class='bold big'>microsoft:</li>
            <li>Windows 7 Pro/Ultimate/Enterprise</li>
            <li>Windows 8 Enterprise</li>
            <li>Windows 10 Enterprise</li>
            <li>Windows Server 2008</li>
            <li>Windows Server 2012, 2012r2</li>
          </ul>
        </div>
        <div class='col-sm-4'>
          <ul>
            <li class='bold big'>linux:</li>
            <li>Ubuntu 10,12,14 LTS versions</li>
            <li>Debian 6 and 7</li>
            <li>CentOS/RHEL 5.x, 6.x, and 7.x.</li>
          </ul>
        </div>
        "],
      ["My storage system is full, what do I do?", "We recommending archiving files you don’t need instant access for anymore.  This allows you to keep your active storage focused on active projects, and your active-archive storage (yes, that’s a thing) offers you both lower cost and a place to backup both your current and older (less used) files.  If you can’t do that, contact <a href='mailto:sales@opendrives.com'>sales@opendrives.com</a> to see about zero-downtime expansion of your OpenDrives system. (sorry, that was sales-y)."],
      ["What’s active-archive storage?", "Active-archive storage, sometimes referred to as near line, is a lower-cost storage platform (comparable to tape) but that has most of the features of your active storage. It also keeps the content online and accessible as compared to tape which might require added time to retrieve and index tapes."],
      ["How can I see how much bandwidth my system is using?", "Login to the OPUS UI by pointing your browser at http://your-storage-ip/ and authenticating. The home screen will show you utilization, network traffic, and storage bandwidth performance."],
      [ "I can’t remember the login information or it’s not working. What do I do?",  "TRY AGAIN WITH THE CAPS LOCKS OFF.  Oops.  If that doesn’t work hit us up at <a href='mailto:support@opendrives.com'>support@opendrives.com</a> and we’ll reset it for you."],
      ["Am I running the latest version of my software?", "Probably, but drop us a line at support@opendrives.com and we’ll make sure."],
      ["How do I update my OpenDrives system?", "Currently, this is something we do with you. Contact us at <a href='mailto:support@opendrives.com'>support@opendrives.com</a> and we’ll schedule a time that’s convenient for you."],
      ["How do I contact OpenDrives support?", "Email (<a href='mailto:support@opendrives.com'>support@opendrives.com</a>) and telephone (888-778-5491) are the best ways."],
      ["What happens if a drive fails?", "Alas, it does happen, and when it does, contact us and we’ll help you diagnose the problem and setup the drive RMA replacement. We will walk you through replacing the drive (it’s easy, we promise). Note that this service (and all of our support services) requires that the OpenDrives system be under an active maintenance contract."],
      ["How many RU’s is your system?", "Every OpenDrives system is 4 Rack Units (RU) whether it is the head unit or expansion. Note that our Active-Archive solution is extra deep (35”). Check our spec sheets for exact dimensions."],
      ["What are the differences between your product models?", "Please refer to the OpenDrives one sheet for quick reference differentiation between the product lines."],
      ["My support is close to expiring, how do I renew?", "Your account representative can make all of the arrangements. If you haven’t already been contacted, please contact them or <a href='mailto:sales@opendrives.com'>sales@opendrives.com</a> to inquire about support renewals."]
    ]
  end

end
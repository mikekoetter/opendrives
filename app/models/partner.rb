class Partner < ActiveRecord::Base

	has_attached_file :image, styles: {
    square: '350x350#',
    medium: '35x350>'
  }
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/

  

end

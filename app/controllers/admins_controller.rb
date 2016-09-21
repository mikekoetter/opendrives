class AdminsController < ApplicationController
	layout 'admin'
	before_action :authenticate_admin!
	

	def index
		
	end

	# def jobs
	# 	@jobs = Job.all
	# 	@icons = Icon.all
	# end

end
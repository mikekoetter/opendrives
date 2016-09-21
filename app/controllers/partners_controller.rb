class PartnersController < ApplicationController
	before_action :authenticate_admin!
	layout 'admin'

	def index
		@partners = Partner.all
	end

	def new
		@partner = Partner.new
	end

	def create
		@partner = Partner.new(partner_params)

		if @partner.save
			redirect_to partners_path, notice: 'Partners added successfully'
		else
			flash.now[:alert] = 'Partners not added'
			render :new
		end
	end

	def destroy
		@partner = Partner.find(params[:id]).destroy
		respond_to do |format|
			format.js
		end
	end

	private
		def partner_params
			params.require(:partner).permit(:image)
		end
end

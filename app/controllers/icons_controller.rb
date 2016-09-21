class IconsController < ApplicationController
	before_action :authenticate_admin!
	layout 'admin'
	def index
		@icons = Icon.all
		# respond_to do |format|
		# 	format.js { render 'popover' }
		# end
		
	end

	def show
		@icon = Icon.find(params[:id])
	end

	def new
		@icon = Icon.new
	end

	def create
		@icon = Icon.new(icon_params)

		if @icon.save
			redirect_to icons_path, notice: "Icon added successfully"
		else
			flash.now[:alert] = 'Icon not added'
			render :new
		end
	end

	def edit
		
	end

	def update
		
	end

	def destroy
		@icon = Icon.find(params[:id]).destroy
		respond_to do |format|
			format.js
		end
	end

	private
		def icon_params
			params.require(:icon).permit(:image)
		end

end

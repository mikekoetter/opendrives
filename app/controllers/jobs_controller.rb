class JobsController < ApplicationController
  layout 'admin'
  before_action :authenticate_admin!

  def show
    @job = Job.find(params[:id])
  end

  def new
    @job = Job.new
  end

  def create
    @job = Job.new(job_params)
    if @job.save
      redirect_to admins_jobs_path, notice: "Job Added Successfully"
    else
      flash.now[:alert] = 'Job was not added'
      render :new
    end
  end

  def edit
  end

  def update
  end

  def destroy
    Job.find(params[:id]).destroy
    redirect_to admins_jobs_path
  end



  private
    def job_params
      params.require(:job).permit(
                                    :job_title, 
                                    :job_description, 
                                    :job_description_second, 
                                    :essentials_title,
                                    :essentials,
                                    :requirements,
                                    :qualities_title,
                                    :qualities
                                  )
    end
end

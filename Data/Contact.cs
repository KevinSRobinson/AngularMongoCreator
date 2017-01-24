using System;

namespace Data
{
    public class Contact
    {
        public int Id { get; set; }


        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Telephone { get; set; }
        public string Email { get; set; }
        public Guid UserId { get; set; }
    }

    public class Awards
    {
        public Single Award50Hours { get; set; }
        public Single Award100Hours { get; set; }
        public Single Award200Hours { get; set; }
        public bool Award50HoursApproved { get; set; }
        public bool Award100HoursApproved { get; set; }
        public bool Award200HoursApproved { get; set; }
        public string Award50HoursApprovedBy { get; set; }
        public string Award100HoursApprovedBy { get; set; }
        public string Award200HoursApprovedBy { get; set; }
        public DateTime Award50HoursApprovedOn { get; set; }
        public DateTime Award100HoursApprovedOn { get; set; }
        public DateTime Award200HoursApprovedOn { get; set; }
        public string UserId { get; set; }
    }


    public class HourRecord
    {
        public int OldId { get; set; }
        public DateTime DateWorkedFrom { get; set; }
        public DateTime DateWorkedTo { get; set; }
        public Single Hours { get; set; }
        public string UserId { get; set; }
    }

    public class Opportunity
    {
        public int OldId { get; set; }
        public string CourseTitle { get; set; }
        public string SkillsLearned { get; set; }
        public string Comments { get; set; }
        public DateTime Date { get; set; }
        public string UserId { get; set; }
    }

    public class PlanOfAction
    {
        public int OldId { get; set; }
        public string Achieve { get; set; }
        public string WhatIDo { get; set; }
        public string WhoDoIHelp { get; set; }
        public string UserId { get; set; }
    }


    public class Review
    {
        public int OldId { get; set; }
        public string Comments { get; set; }
        public string AdminComments { get; set; }
        public string ReviewDate { get; set; }
        public string ReviewedBy { get; set; }
        public string ApprovedOn { get; set; }
        public decimal HoursAchieved { get; set; }
        public bool IsApproved { get; set; }
        public string UserId { get; set; }

    }

    public class SelfAssessment
    {
        public int OldId { get; set; }
        public string Analysis { get; set; }
        public string Description { get; set; }
        public string Evaluation { get; set; }
        public string FutureLearning { get; set; }
        public string UserId { get; set; }

    }



    public class TrainingSkill
    {
        public int OldId { get; set; }
        public string CourseTitle { get; set; }
        public string SkillsLearned { get; set; }
        public string UserId { get; set; }

    }


    public class WhereIVolunteer
    {
        public int OldId { get; set; }
        public string Name { get; set; }
        public string Organisation { get; set; }
        public string Details { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string Town { get; set; }
        public string Postcode { get; set; }
        public string Email { get; set; }
        public string Tel { get; set; }
        public string MyOrganisation { get; set; }
        public string WhatMyOrganisationDoes { get; set; }
        public bool Agreement { get; set; }
        public string UserId { get; set; }

    }


}
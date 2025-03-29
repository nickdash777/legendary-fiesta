import React from "react";
import { Document, Page, Text, View, Image } from "@react-pdf/renderer";
import { CV } from "@/types/cv";
import { styles } from "@/styles/pdf-styles";

interface CVDocumentProps {
  cv: CV;
  template: "classic" | "modern" | "professional";
}

export const CVDocument: React.FC<CVDocumentProps> = ({ cv, template }) => {
  switch (template) {
    case "classic":
      return <ClassicTemplate cv={cv} />;
    case "modern":
      return <ModernTemplate cv={cv} />;
    case "professional":
      return <ProfessionalTemplate cv={cv} />;
    default:
      return <ClassicTemplate cv={cv} />;
  }
};

const ClassicTemplate: React.FC<{ cv: CV }> = ({ cv }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header with personal info */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.name}>{cv.personalInfo.fullName}</Text>
          <Text style={styles.jobTitle}>{cv.personalInfo.jobTitle}</Text>

          <View style={styles.contactInfo}>
            <Text style={styles.contactItem}>{cv.personalInfo.email}</Text>
            <Text style={styles.contactItem}>{cv.personalInfo.phone}</Text>
            <Text style={styles.contactItem}>{cv.personalInfo.address}</Text>
            {cv.personalInfo.website && (
              <Text style={styles.contactItem}>{cv.personalInfo.website}</Text>
            )}
            {cv.personalInfo.linkedin && (
              <Text style={styles.contactItem}>{cv.personalInfo.linkedin}</Text>
            )}
          </View>
        </View>

        {cv.personalInfo.photoUrl && (
          <Image src={cv.personalInfo.photoUrl} style={styles.profileImage} />
        )}
      </View>

      {/* Summary */}
      {cv.summary && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Summary</Text>
          <Text style={styles.summaryText}>{cv.summary}</Text>
        </View>
      )}

      {/* Work Experience */}
      {cv.workExperience.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Work Experience</Text>
          {cv.workExperience.map((job) => (
            <View key={job.id} style={styles.item}>
              <View style={styles.itemHeader}>
                <Text style={styles.itemTitle}>{job.position}</Text>
                <Text style={styles.itemDate}>
                  {job.startDate} - {job.endDate}
                </Text>
              </View>
              <Text style={styles.itemSubtitle}>{job.company}</Text>
              <Text style={styles.itemDescription}>{job.description}</Text>
            </View>
          ))}
        </View>
      )}

      {/* Education */}
      {cv.education.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {cv.education.map((edu) => (
            <View key={edu.id} style={styles.item}>
              <View style={styles.itemHeader}>
                <Text style={styles.itemTitle}>{edu.degree}</Text>
                <Text style={styles.itemDate}>
                  {edu.startDate} - {edu.endDate}
                </Text>
              </View>
              <Text style={styles.itemSubtitle}>{edu.institution}</Text>
              {edu.description && (
                <Text style={styles.itemDescription}>{edu.description}</Text>
              )}
            </View>
          ))}
        </View>
      )}

      {/* Skills */}
      {cv.skills.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.skillsContainer}>
            {cv.skills.map((skill) => (
              <View key={skill.id} style={styles.skillItem}>
                <Text style={styles.skillName}>{skill.name}</Text>
                <View style={styles.skillLevelContainer}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <View
                      key={i}
                      style={[
                        styles.skillLevelDot,
                        i < skill.level
                          ? styles.skillLevelDotFilled
                          : styles.skillLevelDotEmpty,
                      ]}
                    />
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>
      )}

      {/* Languages */}
      {cv.languages.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Languages</Text>
          <View style={styles.languagesContainer}>
            {cv.languages.map((language) => (
              <View key={language.id} style={styles.languageItem}>
                <Text style={styles.languageName}>{language.name}</Text>
                <Text style={styles.languageLevel}>{language.level}</Text>
              </View>
            ))}
          </View>
        </View>
      )}

      {/* Projects */}
      {cv.projects.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projects</Text>
          {cv.projects.map((project) => (
            <View key={project.id} style={styles.item}>
              <Text style={styles.itemTitle}>{project.title}</Text>
              <Text style={styles.itemDescription}>{project.description}</Text>
              {project.link && (
                <Text style={styles.projectLink}>{project.link}</Text>
              )}
            </View>
          ))}
        </View>
      )}
    </Page>
  </Document>
);

// Modern Template with a more contemporary layout
const ModernTemplate: React.FC<{ cv: CV }> = ({ cv }) => (
  <Document>
    <Page size="A4" style={styles.modernPage}>
      {/* Sidebar */}
      <View style={styles.modernSidebar}>
        {/* Profile Photo */}
        {cv.personalInfo.photoUrl && (
          <View style={styles.modernPhotoContainer}>
            <Image
              src={cv.personalInfo.photoUrl}
              style={styles.modernProfileImage}
            />
          </View>
        )}

        {/* Contact Information */}
        <View style={styles.modernSidebarSection}>
          <Text style={styles.modernSidebarTitle}>Contact</Text>
          <View style={styles.modernContactItem}>
            <Text style={styles.modernContactLabel}>Email</Text>
            <Text style={styles.modernContactValue}>
              {cv.personalInfo.email}
            </Text>
          </View>
          <View style={styles.modernContactItem}>
            <Text style={styles.modernContactLabel}>Phone</Text>
            <Text style={styles.modernContactValue}>
              {cv.personalInfo.phone}
            </Text>
          </View>
          <View style={styles.modernContactItem}>
            <Text style={styles.modernContactLabel}>Address</Text>
            <Text style={styles.modernContactValue}>
              {cv.personalInfo.address}
            </Text>
          </View>
          {cv.personalInfo.website && (
            <View style={styles.modernContactItem}>
              <Text style={styles.modernContactLabel}>Website</Text>
              <Text style={styles.modernContactValue}>
                {cv.personalInfo.website}
              </Text>
            </View>
          )}
          {cv.personalInfo.linkedin && (
            <View style={styles.modernContactItem}>
              <Text style={styles.modernContactLabel}>LinkedIn</Text>
              <Text style={styles.modernContactValue}>
                {cv.personalInfo.linkedin}
              </Text>
            </View>
          )}
        </View>

        {/* Skills Section */}
        {cv.skills.length > 0 && (
          <View style={styles.modernSidebarSection}>
            <Text style={styles.modernSidebarTitle}>Skills</Text>
            {cv.skills.map((skill) => (
              <View key={skill.id} style={styles.modernSkillItem}>
                <Text style={styles.modernSkillName}>{skill.name}</Text>
                <View style={styles.modernSkillBar}>
                  <View
                    style={[
                      styles.modernSkillBarFill,
                      { width: `${(skill.level / 5) * 100}%` },
                    ]}
                  />
                </View>
              </View>
            ))}
          </View>
        )}

        {/* Languages Section */}
        {cv.languages.length > 0 && (
          <View style={styles.modernSidebarSection}>
            <Text style={styles.modernSidebarTitle}>Languages</Text>
            {cv.languages.map((language) => (
              <View key={language.id} style={styles.modernLanguageItem}>
                <Text style={styles.modernLanguageName}>{language.name}</Text>
                <Text style={styles.modernLanguageLevel}>{language.level}</Text>
              </View>
            ))}
          </View>
        )}
      </View>

      {/* Main Content */}
      <View style={styles.modernMain}>
        {/* Header */}
        <View style={styles.modernHeader}>
          <Text style={styles.modernName}>{cv.personalInfo.fullName}</Text>
          <Text style={styles.modernJobTitle}>{cv.personalInfo.jobTitle}</Text>
        </View>

        {/* Summary */}
        {cv.summary && (
          <View style={styles.modernSection}>
            <Text style={styles.modernSectionTitle}>Profile</Text>
            <Text style={styles.modernSummary}>{cv.summary}</Text>
          </View>
        )}

        {/* Work Experience */}
        {cv.workExperience.length > 0 && (
          <View style={styles.modernSection}>
            <Text style={styles.modernSectionTitle}>Work Experience</Text>
            {cv.workExperience.map((job) => (
              <View key={job.id} style={styles.modernItem}>
                <View style={styles.modernItemHeader}>
                  <Text style={styles.modernItemTitle}>{job.position}</Text>
                  <Text style={styles.modernItemPeriod}>
                    {job.startDate} - {job.endDate}
                  </Text>
                </View>
                <Text style={styles.modernItemSubtitle}>{job.company}</Text>
                <Text style={styles.modernItemDescription}>
                  {job.description}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* Education */}
        {cv.education.length > 0 && (
          <View style={styles.modernSection}>
            <Text style={styles.modernSectionTitle}>Education</Text>
            {cv.education.map((edu) => (
              <View key={edu.id} style={styles.modernItem}>
                <View style={styles.modernItemHeader}>
                  <Text style={styles.modernItemTitle}>{edu.degree}</Text>
                  <Text style={styles.modernItemPeriod}>
                    {edu.startDate} - {edu.endDate}
                  </Text>
                </View>
                <Text style={styles.modernItemSubtitle}>{edu.institution}</Text>
                {edu.description && (
                  <Text style={styles.modernItemDescription}>
                    {edu.description}
                  </Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Projects */}
        {cv.projects.length > 0 && (
          <View style={styles.modernSection}>
            <Text style={styles.modernSectionTitle}>Projects</Text>
            {cv.projects.map((project) => (
              <View key={project.id} style={styles.modernItem}>
                <Text style={styles.modernItemTitle}>{project.title}</Text>
                <Text style={styles.modernItemDescription}>
                  {project.description}
                </Text>
                {project.link && (
                  <Text style={styles.modernProjectLink}>{project.link}</Text>
                )}
              </View>
            ))}
          </View>
        )}
      </View>
    </Page>
  </Document>
);

// Professional Template with a clean, corporate look
const ProfessionalTemplate: React.FC<{ cv: CV }> = ({ cv }) => (
  <Document>
    <Page size="A4" style={styles.professionalPage}>
      {/* Header Section */}
      <View style={styles.professionalHeader}>
        {/* Name and Title */}
        <View style={styles.professionalNameSection}>
          <Text style={styles.professionalName}>
            {cv.personalInfo.fullName}
          </Text>
          <Text style={styles.professionalTitle}>
            {cv.personalInfo.jobTitle}
          </Text>
        </View>

        {/* Photo (optional) */}
        {cv.personalInfo.photoUrl && (
          <Image
            src={cv.personalInfo.photoUrl}
            style={styles.professionalPhoto}
          />
        )}
      </View>

      {/* Contact Information Bar */}
      <View style={styles.professionalContactBar}>
        <Text style={styles.professionalContactItem}>
          {cv.personalInfo.email}
        </Text>
        <Text style={styles.professionalContactItem}>
          {cv.personalInfo.phone}
        </Text>
        <Text style={styles.professionalContactItem}>
          {cv.personalInfo.address}
        </Text>
        {cv.personalInfo.website && (
          <Text style={styles.professionalContactItem}>
            {cv.personalInfo.website}
          </Text>
        )}
        {cv.personalInfo.linkedin && (
          <Text style={styles.professionalContactItem}>
            {cv.personalInfo.linkedin}
          </Text>
        )}
      </View>

      {/* Main Content Container */}
      <View style={styles.professionalContent}>
        {/* Left Column */}
        <View style={styles.professionalLeftColumn}>
          {/* Summary */}
          {cv.summary && (
            <View style={styles.professionalSection}>
              <Text style={styles.professionalSectionTitle}>
                Professional Summary
              </Text>
              <View style={styles.professionalSectionDivider} />
              <Text style={styles.professionalSummary}>{cv.summary}</Text>
            </View>
          )}

          {/* Work Experience */}
          {cv.workExperience.length > 0 && (
            <View style={styles.professionalSection}>
              <Text style={styles.professionalSectionTitle}>
                Work Experience
              </Text>
              <View style={styles.professionalSectionDivider} />
              {cv.workExperience.map((job) => (
                <View key={job.id} style={styles.professionalExperienceItem}>
                  <View style={styles.professionalExperienceHeader}>
                    <Text style={styles.professionalExperienceTitle}>
                      {job.position}
                    </Text>
                    <Text style={styles.professionalExperienceCompany}>
                      {job.company}
                    </Text>
                  </View>
                  <Text style={styles.professionalExperiencePeriod}>
                    {job.startDate} - {job.endDate}
                  </Text>
                  <Text style={styles.professionalExperienceDescription}>
                    {job.description}
                  </Text>
                </View>
              ))}
            </View>
          )}

          {/* Education */}
          {cv.education.length > 0 && (
            <View style={styles.professionalSection}>
              <Text style={styles.professionalSectionTitle}>Education</Text>
              <View style={styles.professionalSectionDivider} />
              {cv.education.map((edu) => (
                <View key={edu.id} style={styles.professionalEducationItem}>
                  <View style={styles.professionalEducationHeader}>
                    <Text style={styles.professionalEducationDegree}>
                      {edu.degree}
                    </Text>
                    <Text style={styles.professionalEducationInstitution}>
                      {edu.institution}
                    </Text>
                  </View>
                  <Text style={styles.professionalEducationPeriod}>
                    {edu.startDate} - {edu.endDate}
                  </Text>
                  {edu.description && (
                    <Text style={styles.professionalEducationDescription}>
                      {edu.description}
                    </Text>
                  )}
                </View>
              ))}
            </View>
          )}
        </View>

        {/* Right Column */}
        <View style={styles.professionalRightColumn}>
          {/* Skills */}
          {cv.skills.length > 0 && (
            <View style={styles.professionalSection}>
              <Text style={styles.professionalSectionTitle}>Skills</Text>
              <View style={styles.professionalSectionDivider} />
              <View style={styles.professionalSkillsContainer}>
                {cv.skills.map((skill) => (
                  <View key={skill.id} style={styles.professionalSkillItem}>
                    <Text style={styles.professionalSkillName}>
                      {skill.name}
                    </Text>
                    <View style={styles.professionalSkillLevel}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <View
                          key={i}
                          style={[
                            styles.professionalSkillDot,
                            i < skill.level
                              ? styles.professionalSkillDotActive
                              : styles.professionalSkillDotInactive,
                          ]}
                        />
                      ))}
                    </View>
                  </View>
                ))}
              </View>
            </View>
          )}

          {/* Languages */}
          {cv.languages.length > 0 && (
            <View style={styles.professionalSection}>
              <Text style={styles.professionalSectionTitle}>Languages</Text>
              <View style={styles.professionalSectionDivider} />
              {cv.languages.map((language) => (
                <View key={language.id} style={styles.professionalLanguageItem}>
                  <Text style={styles.professionalLanguageName}>
                    {language.name}
                  </Text>
                  <Text style={styles.professionalLanguageLevel}>
                    {language.level}
                  </Text>
                </View>
              ))}
            </View>
          )}

          {/* Projects */}
          {cv.projects.length > 0 && (
            <View style={styles.professionalSection}>
              <Text style={styles.professionalSectionTitle}>Projects</Text>
              <View style={styles.professionalSectionDivider} />
              {cv.projects.map((project) => (
                <View key={project.id} style={styles.professionalProjectItem}>
                  <Text style={styles.professionalProjectTitle}>
                    {project.title}
                  </Text>
                  <Text style={styles.professionalProjectDescription}>
                    {project.description}
                  </Text>
                  {project.link && (
                    <Text style={styles.professionalProjectLink}>
                      {project.link}
                    </Text>
                  )}
                </View>
              ))}
            </View>
          )}
        </View>
      </View>
    </Page>
  </Document>
);

export default CVDocument;

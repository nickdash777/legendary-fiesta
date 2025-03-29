import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  // Classic Template Styles
  page: {
    padding: 30,
    fontFamily: "Helvetica",
    fontSize: 12,
    lineHeight: 1.5,
    color: "#333",
  },
  header: {
    flexDirection: "row",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eaeaea",
    paddingBottom: 20,
  },
  headerContent: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#2563eb",
  },
  jobTitle: {
    fontSize: 16,
    marginBottom: 10,
    color: "#4b5563",
  },
  contactInfo: {
    marginTop: 10,
  },
  contactItem: {
    marginBottom: 3,
    fontSize: 10,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#2563eb",
    borderBottomWidth: 1,
    borderBottomColor: "#eaeaea",
    paddingBottom: 5,
  },
  summaryText: {
    marginBottom: 10,
    textAlign: "justify",
  },
  item: {
    marginBottom: 10,
  },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemTitle: {
    fontWeight: "bold",
    fontSize: 12,
  },
  itemDate: {
    fontSize: 10,
    color: "#6b7280",
  },
  itemSubtitle: {
    fontSize: 11,
    marginBottom: 3,
    fontStyle: "italic",
  },
  itemDescription: {
    fontSize: 10,
    textAlign: "justify",
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skillItem: {
    width: "50%",
    marginBottom: 8,
  },
  skillName: {
    fontSize: 11,
    marginBottom: 3,
  },
  skillLevelContainer: {
    flexDirection: "row",
  },
  skillLevelDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#e5e7eb",
    marginRight: 3,
  },
  skillLevelDotFilled: {
    backgroundColor: "#2563eb",
  },
  skillLevelDotEmpty: {
    backgroundColor: "#2563eb", //kle
  },
  languagesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  languageItem: {
    width: "50%",
    marginBottom: 8,
  },
  languageName: {
    fontSize: 11,
    fontWeight: "bold",
  },
  languageLevel: {
    fontSize: 10,
    color: "#6b7280",
  },
  projectLink: {
    fontSize: 10,
    color: "#2563eb",
    textDecoration: "underline",
  },

  // Modern Template Styles
  modernPage: {
    flexDirection: "row",
    fontFamily: "Helvetica",
    fontSize: 12,
    color: "#333",
  },
  modernSidebar: {
    width: "30%",
    backgroundColor: "#f8fafc",
    padding: 20,
  },
  modernMain: {
    width: "70%",
    padding: 20,
  },
  modernHeader: {
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#3b82f6",
    paddingBottom: 10,
  },
  modernName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1e40af",
  },
  modernJobTitle: {
    fontSize: 16,
    marginTop: 5,
    color: "#4b5563",
  },
  modernPhotoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  modernProfileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    objectFit: "cover",
  },
  modernSidebarSection: {
    marginBottom: 20,
  },
  modernSidebarTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#1e40af",
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  modernContactItem: {
    marginBottom: 8,
  },
  modernContactLabel: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#4b5563",
  },
  modernContactValue: {
    fontSize: 10,
  },
  modernSkillItem: {
    marginBottom: 8,
  },
  modernSkillName: {
    fontSize: 11,
    marginBottom: 3,
  },
  modernSkillBar: {
    height: 5,
    backgroundColor: "#e5e7eb",
    borderRadius: 2.5,
  },
  modernSkillBarFill: {
    height: 5,
    backgroundColor: "#3b82f6",
    borderRadius: 2.5,
  },
  modernLanguageItem: {
    marginBottom: 8,
  },
  modernLanguageName: {
    fontSize: 11,
    fontWeight: "bold",
  },
  modernLanguageLevel: {
    fontSize: 10,
    color: "#4b5563",
  },
  modernSection: {
    marginBottom: 20,
  },
  modernSectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1e40af",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    paddingBottom: 5,
  },
  modernSummary: {
    fontSize: 11,
    lineHeight: 1.6,
    textAlign: "justify",
  },
  modernItem: {
    marginBottom: 15,
  },
  modernItemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modernItemTitle: {
    fontWeight: "bold",
    fontSize: 13,
    color: "#1f2937",
  },
  modernItemPeriod: {
    fontSize: 10,
    color: "#6b7280",
  },
  modernItemSubtitle: {
    fontSize: 11,
    color: "#4b5563",
    marginTop: 2,
    marginBottom: 4,
  },
  modernItemDescription: {
    fontSize: 10,
    lineHeight: 1.5,
    textAlign: "justify",
  },
  modernProjectLink: {
    fontSize: 10,
    color: "#3b82f6",
    marginTop: 2,
    textDecoration: "underline",
  },

  // Professional Template Styles
  professionalPage: {
    padding: 30,
    fontFamily: "Helvetica",
    fontSize: 12,
    color: "#333",
    backgroundColor: "#ffffff",
  },
  professionalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  professionalNameSection: {
    flex: 1,
  },
  professionalName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0f172a",
  },
  professionalTitle: {
    fontSize: 16,
    color: "#64748b",
    marginTop: 5,
  },
  professionalPhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    objectFit: "cover",
  },
  professionalContactBar: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#f1f5f9",
    padding: 10,
    marginBottom: 20,
    borderRadius: 4,
    justifyContent: "space-between",
  },
  professionalContactItem: {
    fontSize: 9,
    color: "#64748b",
    marginRight: 10,
  },
  professionalContent: {
    flexDirection: "row",
    gap: 20,
  },
  professionalLeftColumn: {
    width: "60%",
  },
  professionalRightColumn: {
    width: "35%",
  },
  professionalSection: {
    marginBottom: 20,
  },
  professionalSectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 5,
  },
  professionalSectionDivider: {
    height: 2,
    backgroundColor: "#0f172a",
    width: 70,
    marginBottom: 10,
  },
  professionalSummary: {
    fontSize: 11,
    lineHeight: 1.6,
    textAlign: "justify",
    color: "#334155",
  },
  professionalExperienceItem: {
    marginBottom: 15,
  },
  professionalExperienceHeader: {
    marginBottom: 3,
  },
  professionalExperienceTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#0f172a",
  },
  professionalExperienceCompany: {
    fontSize: 12,
    fontStyle: "italic",
    color: "#334155",
  },
  professionalExperiencePeriod: {
    fontSize: 10,
    color: "#64748b",
    marginBottom: 5,
  },
  professionalExperienceDescription: {
    fontSize: 10,
    lineHeight: 1.5,
    textAlign: "justify",
    color: "#334155",
  },
  professionalEducationItem: {
    marginBottom: 15,
  },
  professionalEducationHeader: {
    marginBottom: 3,
  },
  professionalEducationDegree: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#0f172a",
  },
  professionalEducationInstitution: {
    fontSize: 12,
    fontStyle: "italic",
    color: "#334155",
  },
  professionalEducationPeriod: {
    fontSize: 10,
    color: "#64748b",
    marginBottom: 5,
  },
  professionalEducationDescription: {
    fontSize: 10,
    lineHeight: 1.5,
    textAlign: "justify",
    color: "#334155",
  },
  professionalSkillsContainer: {
    flexDirection: "column",
  },
  professionalSkillItem: {
    marginBottom: 10,
  },
  professionalSkillName: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 5,
  },
  professionalSkillLevel: {
    flexDirection: "row",
  },
  professionalSkillDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#e2e8f0",
    marginRight: 3,
  },
  professionalSkillDotActive: {
    backgroundColor: "#0369a1",
  },
  professionalSkillDotInactive: {
    backgroundColor: "#0369a1", //kle2
  },
  professionalLanguageItem: {
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  professionalLanguageName: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#0f172a",
  },
  professionalLanguageLevel: {
    fontSize: 10,
    color: "#64748b",
    backgroundColor: "#f1f5f9",
    padding: "2 5",
    borderRadius: 2,
  },
  professionalProjectItem: {
    marginBottom: 12,
  },
  professionalProjectTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 3,
  },
  professionalProjectDescription: {
    fontSize: 10,
    lineHeight: 1.5,
    color: "#334155",
    marginBottom: 2,
  },
  professionalProjectLink: {
    fontSize: 9,
    color: "#0369a1",
    textDecoration: "underline",
  },
});
